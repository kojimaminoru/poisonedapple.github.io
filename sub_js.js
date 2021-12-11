function Sub_4CS_Japanese(event) {  //国語  Complete!
  function sortfunc(a,b){
    if( a > b ) return 1;
    if( a < b ) return -1;
    return 0;
  }

  function JP_2al(point_cal){
    var exam_cal = point_cal [0] * 0.6;
    var SE_cal = point_cal.slice(1,6); //インデックス１から先頭から6個目のデータまで
    //SE Small_Examとする

    SE_cal.sort(sortfunc);
    SE_cal = SE_cal.slice(1,5);

    var SE_sum_cal = SE_cal.reduce(function(a,b){
        return a + b; });
    var point_sum_cal = SE_sum_cal + exam_cal;

    return point_sum_cal;
  }

  let mydata = ["","","","","",""];
  for(let i = 0; i < 4; i++){
    for(let j = 0; j < 6; j++) mydata[j] = document.getElementById(`CS4_JP_${i}${j}`).value;
    localStorage.setItem(`S_CS4_JP_mydata${i}`, JSON.stringify(mydata));
  }

  console.log("a");

  let point = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];
  let point_sum = [0,0,0,0];
  let point_re = [0,0,0,0];
  for (let i = 0; i < 4; i++){
    for (let j = 0; j < 6; j++){
      point[i][j] = Number(document.getElementById(`CS4_JP_${i}${j}`).value);
    }
    point_sum[i] = Math.round(JP_2al(point[i]) * 10) / 10;
  }
  point_re[0] = point_sum[0];
  point_re[1] = Math.round((point_sum[0] + point_sum[1]) / 2 * 10) / 10;
  point_re[2] = Math.round((point_sum[0] + point_sum[1] + point_sum[2]) / 3 * 10) / 10;
  point_re[3] = Math.round((point_sum[0] + point_sum[1] + point_sum[2] + point_sum[3]) / 4 * 10) / 10;
  for(let i = 0; i < 4; i++){
    document.getElementById(`CS4_JP_span_${i}0`).innerHTML = point_sum[i];
    document.getElementById(`CS4_JP_span_${i}1`).innerHTML = point_re[i];
  }

  var dialog = document.querySelector('dialog');
  dialog.showModal();
  var btn_close = document.getElementById('dia_close');
  btn_close.addEventListener('click', function() {
    dialog.close();
  }, false);

  return 0;
}

