
$('#js-shopping-list-form').submit(event => {
    event.preventDefault();
    let test = $('#shopping-list-entry').val();
      let newItem = `<li>
      <span class="shopping-item">${test}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`;
  $('.shopping-list').append(newItem);
});

$('.shopping-item-toggle').click(function(){
    $(this).parent().parent().first().toggleClass("shopping-item__checked");
})

$('.shopping-item-delete').click(function(){
    $(this).parent().parent().remove();
})

// $('shopping-list').on('click', '.shopping-item-toggle', e=>{
//   let strike = $(e.currentTarget).parent().siblings('span');
//   strike.toggleClass('.shopping-item__checked')
// })





// stops reload on submit




{/* <li>
        <span class="shopping-item">apples</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li> */}