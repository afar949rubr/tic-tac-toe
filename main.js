const td00 = $("#td00")
const td01 = $("#td01")
const td02 = $("#td02")
const td10 = $("#td10")
const td11 = $("#td11")
const td12 = $("#td12")
const td20 = $("#td20")
const td21 = $("#td21")
const td22 = $("#td22")
const reset = $("#reset")
let turn = 0;
let player1 = 0;
let player2 = 0;

$("#td00").click(function ()
{
  if(turn === 0)
  {
    $("#td00").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td00").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td01").click(function ()
{
  if(turn === 0)
  {
    $("#td01").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td01").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td02").click(function ()
{
  if(turn === 0)
  {
    $("#td02").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td02").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td10").click(function ()
{
  if(turn === 0)
  {
    $("#td10").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td10").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td11").click(function ()
{
  if(turn === 0)
  {
    $("#td11").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td11").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td12").click(function ()
{
  if(turn === 0)
  {
    $("#td12").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td12").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td20").click(function ()
{
  if(turn === 0)
  {
    $("#td20").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td20").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td21").click(function ()
{
  if(turn === 0)
  {
    $("#td21").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td21").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

$("#td22").click(function ()
{
  if(turn === 0)
  {
    $("#td22").text("O");
    turn = 1
    player1 = 1
    player2 = 0
  }
  else{
    $("#td22").text("X");
    turn = 0
    player1 = 0
    player2 = 1
  }
  if(turn === 1)
  {
    player1 = 1
    player2 = 0
  }
  else{
    player1 = 0
    player2 = 1
  }
  checkWin()
})

function checkWin() {
  if($("#td00").text() + $("#td01").text() + $("#td02").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td00").text() + $("#td01").text() + $("#td02").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td10").text() + $("#td11").text() + $("#td12").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td10").text() + $("#td11").text() + $("#td12").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td20").text() + $("#td21").text() + $("#td22").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td20").text() + $("#td21").text() + $("#td22").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td00").text() + $("#td10").text() + $("#td20").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td00").text() + $("#td10").text() + $("#td20").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td01").text() + $("#td11").text() + $("#td21").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td01").text() + $("#td11").text() + $("#td21").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td02").text() + $("#td12").text() + $("#td22").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td02").text() + $("#td12").text() + $("#td22").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td00").text() + $("#td11").text() + $("#td22").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td00").text() + $("#td11").text() + $("#td22").text() === "XXX")
  {
    alert('玩家2獲勝');
  }
  if($("#td02").text() + $("#td11").text() + $("#td20").text() === "OOO")
  {
    alert('玩家1獲勝');
  }
  else if($("#td02").text() + $("#td11").text() + $("#td20").text() === "OOO")
  {
    alert('玩家2獲勝');
  }
}

$("#reset").click(function (){
  window.location.reload();
})
