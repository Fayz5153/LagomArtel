const direction__items = document.querySelectorAll(".direction__item")
for (let i = 0; i < direction__items.length; i++) {
  const element = direction__items[i];
  
  const DEG_TO_RAD = Math.PI / 180;
  const RAD_TO_DEG = 180 / Math.PI;


  const point = ( x = 0, y = 0 ) => ({ x, y });
  const length = ( { x, y } ) => Math.sqrt( x * x + y * y );
  const normalize = ( vector ) => {
      let vectorLength = length( vector );
      let { x, y } = vector;

      return point( x / vectorLength, y / vectorLength );
  };
  const subtract = ( a, b ) => ({ x: a.x - b.x, y: a.y - b.y });

  const DIRECTIONS = {
    TOP: "top",
    RIGHT: "right",
    BOTTOM: "bottom",
    LEFT: "left"
  };


  let rectangle = element.getBoundingClientRect();
  let center = point(
    rectangle.width / 2 + rectangle.left,
    rectangle.height / 2 + rectangle.top
  );

  element.addEventListener('mouseenter', enter_mouseMoveHandler);
  element.addEventListener('mouseleave', leave_mouseMoveHandler);

  async function enter_mouseMoveHandler( { clientX, clientY } ){
    let mouse = point(clientX, clientY);
    let mc =subtract(mouse, center);
    let direction =normalize(mc);
    let angle =Math.atan2(direction.y, direction.x) * RAD_TO_DEG;
    let type =getDirection(angle);
    element.setAttribute("id", `hover_out_${type}`)
    // console.log(type)
  }
  async function leave_mouseMoveHandler( { clientX, clientY } ){
    let mouse =point(clientX, clientY);
    let mc =subtract(mouse, center);
    let direction =normalize(mc);
    let angle =Math.atan2(direction.y, direction.x) * RAD_TO_DEG;
    let type =getDirection(angle);
    element.setAttribute("id", `hover_enter_${type}`)
    // console.log(type)
  }

  function getDirection( angle ){
    if( angle <= -45 && angle > -130 ){
      return DIRECTIONS.TOP;
    }else if( angle > -180 && angle <= -130 || angle <= 180 && angle > 130 ){
      return DIRECTIONS.LEFT;
    }else if( angle > 45 && angle <= 130 ){
      return DIRECTIONS.BOTTOM;
    }else if( angle <= 45 && angle > -45 ){
      return DIRECTIONS.RIGHT;
    }
  }
}