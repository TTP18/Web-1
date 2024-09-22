let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.imagecontainer').forEach(img =>{
    (img).onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let image = img.getAttribute('img');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('.preview-image');
      if(image == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});
