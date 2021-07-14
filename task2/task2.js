let array=[
    ['#','#','#','#','#','#','#','#','#'],

    ['#','+','+','+','#','+','+','+','#'],
  
    ['#','+','#','+','#','+','#','+','#'],
  
    ['+','+','#','+','0','+','#','+','#'],
  
    ['#','#','#','+','#','#','#','#','#'],
  
    ['#','#','+','+','#','#','#','#','#'],
  
    ['#','#','+','#','#','#','#','#','#'],
  
    ['#','#','#','#','#','#','#','#','#'],
  
]

  function Array(props) {
    let startHeight;
    let startLength;
    const cloneArray = props.slice()
    let startH;
    let startL;
    let ansver = [];
    let way = {
      right: undefined,
      left: undefined,
      top: undefined,
      bottom: undefined,
    };
    let previousway = false;
    cloneArray.forEach(function (item, index) {
      let ind = item.indexOf("0", 0);
      if (ind >= 0) {
        startHeight=index;
        startH = index;
        startL = ind;
        startLength = ind;
      }
    });

    function checking(heigh, length) {
      let righindex = rightCheck(heigh, length);
      let leftindex = leftCheck(heigh, length);
      let topindex = topCheck(heigh, length);
      let bottomindex = bottomCheck(heigh, length);
      if (righindex) {
        way.right = righindex;
        ansver.push("right");
        startLength = way.right[1];
        startHeight = way.right[0];
        previousway = "r";
        return checking(startHeight, startLength);
      }
      if (leftindex) {
        way.left = leftindex;
        ansver.push("left");
        startLength = way.left[1];
        startHeight = way.left[0];
        previousway = "l";
        return checking(startHeight, startLength);
      }
      if (topindex) {
        way.top = topindex;
        ansver.push("top");
        startHeight = way.top[0];
        startLength = way.top[1];
        previousway = "t";
        return checking(startHeight, startLength);
      }
      if (bottomindex) {
        way.bottom = bottomindex;
        ansver.push("bottom");
        startHeight = way.bottom[0];
        startLength = way.bottom[1];
        previousway = "b";
        return checking(startHeight, startLength);
      }
    }

    function rightCheck(arg1, arg2) {
      if (cloneArray?.[arg1]?.[arg2 + 1] === "+" && previousway !== "l") {
        return [arg1, arg2 + 1];
      }
    }
    function leftCheck(arg1, arg2) {
      if (cloneArray?.[arg1]?.[arg2 - 1] === "+" && previousway !== "r") {
        return [arg1, arg2 - 1];
      }
    }
    function topCheck(arg1, arg2) {
      if (cloneArray?.[arg1 - 1]?.[arg2] === "+" && previousway !== "b") {
        return [arg1 - 1, arg2];
      }
    }
    function bottomCheck(arg1, arg2) {
      if (cloneArray?.[arg1 + 1]?.[arg2] === "+" && previousway !== "t") {
        return [arg1 + 1, arg2];
      }
    }

    checking(startHeight, startLength);
    previousway = false;

    function lastcheck() {
      if (
        startHeight === 0 ||
        startHeight === cloneArray.length - 1 ||
        startLength === 0 ||
        startLength === cloneArray[0].length - 1
      ) {
        console.log(ansver);
        return ansver
      } else {
        previousway = false;
        cloneArray[startHeight][startLength] = "M";
        ansver = [];
        startLength = startL;
        startHeight = startH;
        checking(startHeight, startLength);
        return lastcheck();
      }
    }
    lastcheck();
  }

  Array(array);