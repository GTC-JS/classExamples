//visit http://www.echoecho.com/htmlforms07.htm
document.cookie

//"__uiv=1; __utma=82968194.1470240274.1458962086.1458962086.1458962086.1; __utmc=82968194; __utmz=82968194.1458962086.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided); __uis=8a4937e2-e23c-544b-955b-07a53811280e"

window.localStorage
//Storage {__ansync3rdp_criteo: "eyJiSWQiOiJjcml0ZW8iLCJ1Q29kZSI6bnVsbCwidHMiOjE0NTg5NjU3MDk3MzV9", google_experiment_mod: "893", google_sra_enabled: "1", length: 3}
window.sessionStorage
//Storage {__ansync3rdp_criteo: "eyJiSWQiOiJjcml0ZW8iLCJ1Q29kZSI6bnVsbCwidHMiOjE0NTg5NjU3MDk3MzV9", length: 1}

window.sessionStorage.clear()
window.sessionStorage
//Storage {length: 0}

window.sessionStorage.fname="Ozgur"
window.sessionStorage
//Storage {fname: "Ozgur", length: 1}
window.sessionStorage.getItem("fname")
window.sessionStorage.setItem("fname","Ozgur")
//"Ozgur"
//or
window.sessionStorage.fname
//"Ozgur"