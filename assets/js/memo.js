var data = localStorage;
var checkboxes = document.getElementsByName('memo');
var note = document.getElementById('note');
let category = document.getElementById('category').value;
if (!category) {
    category = '';
}

for (let checkbox of checkboxes) {
    let number = checkbox.value;
    switch(data.getItem(number + category)) {
        // 保存済みデータをページに反映
        case "0":
            checkbox.checked = false;
            break;
        case "1":
            checkbox.checked = true;
            break;
        default:
            // データ初期化
            checkbox.checked = false;
            data.setItem(number + category, 0);
    }
    checkbox.addEventListener('change', ()=>{
        data.setItem(number + category, parseInt(data.getItem(number + category)) ^ 1);
    });
}

// データ初期化
if (!data.hasOwnProperty('note' + category)) {
    data.setItem('note' + category, '');
}
// ノート反映
note.value = data.getItem('note' + category);
// ノート更新
note.addEventListener('input', ()=>{
    data.setItem('note' + category, note.value);
});
