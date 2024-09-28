var data = localStorage;
var checkboxes = document.getElementsByName('memo');
var note = document.getElementById('note');

for (let checkbox of checkboxes) {
    let number = checkbox.value;
    switch(data.getItem(number)) {
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
            data.setItem(number, 0);
    }
    checkbox.addEventListener('change', ()=>{
        data.setItem(number, parseInt(data.getItem(number)) ^ 1);
    });
}

// データ初期化
if (!data.hasOwnProperty('note')) {
    data.setItem('note', '');
}
// ノート反映
note.value = data.getItem('note');
// ノート更新
note.addEventListener('input', ()=>{
    data.setItem('note', note.value);
});
