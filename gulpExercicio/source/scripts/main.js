function main()
{
 var num = parseInt(document.getElementById("num").value);
 var resp = document.getElementById("resposta");

 resp.innerHTML = somatorio(num);
}
function somatorio(x)
{
 if(x<=1)
  return 1;
 else
  return x + somatorio(x-1) ;
}

alert('Hello')