window.onload = function () {
  document.getElementById('addTableBtn').addEventListener('click', addTable);

  co
}

function createTRNode(colNodes) {
  let trNode = document.createElement("tr");
  colNodes.forEach(function (colNode) {
    trNode.appendChild(colNode);
  })
  return trNode;
}

function createTDNode(childNode) {
  let tdNode = document.createElement("td");
  tdNode.appendChild(childNode);
  return tdNode;
}

function createTxtNode(txt) {
  let txtNode = document.createTextNode(txt);
  return txtNode;
}

function createButton(btnText, e, l) {
  let buttonNode = document.createElement('button');
  let btnTextNode = createTxtNode(btnText)
  buttonNode.appendChild(btnTextNode);
  buttonNode.addEventListener(e,l)
  return buttonNode
}



function addTable() {
  const tableNode = document.createElement("table");
  for (let i = 0; i < 3; i++) {
    let col1 = createTDNode(createTxtNode("Cell (" + i + ", 0)"));
    let col2 = createTDNode(createButton("Edit Element", "click", function () {
      encodeURIComp
    }))
    tableNode.appendChild(createTRNode([col1, col2]));
  }
  document.getElementById("root").appendChild(tableNode);
}

function edit(node) {
  let NewNode = document.createElement('input');
  NewNode.type = 'text';
  NewNode.placeholder = 'Enter Cell (x,y)';
  NewNode.removeChild
}
