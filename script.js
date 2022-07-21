function check(form)
{
 
if(form.userId.value == "" && form.password.value == "")
{
    document.getElementById('showErrorMessage').innerHTML="*Username & Password can't be blank." 
    //window.open('home.html')
}
else if(form.userId.value == "bhubon" && form.password.value == "123")
{
    window.open('home.html')
}
else if(form.userId.value == "pawan" && form.password.value == "123")
{
    window.open('home.html')
}
else if(form.userId.value == "tarikul" && form.password.value == "123")
{
    window.open('home.html')
}
else if(form.userId.value == "supriyo" && form.password.value == "123")
{
    window.open('home.html')
}
else
{
    document.getElementById('showErrorMessage').innerHTML="*Username & Password not matched." 
}
}