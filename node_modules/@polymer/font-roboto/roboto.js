const $_documentContainer = document.createElement('div');
$_documentContainer.setAttribute('style', 'display: none;');

$_documentContainer.innerHTML = `
<link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic" crossorigin="anonymous">
`;
document.head.appendChild($_documentContainer);
