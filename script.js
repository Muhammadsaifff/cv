.hidden{
opacity:0;
transform:translateY(50px);
transition:1s ease;
}

.show{
opacity:1;
transform:translateY(0);
}

.profile-card{
transition:.3s ease;
transform-style:preserve-3d;
}

.card,
.stat,
.contact a,
.btn,
.skills span{
transition:.35s;
}

.card:hover{
box-shadow:0 20px 45px rgba(37,99,235,.2);
}

.hero h1{
background:linear-gradient(90deg,#ffffff,#60a5fa);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

::selection{
background:#2563eb;
color:#fff;
}

::-webkit-scrollbar{
width:10px;
}

::-webkit-scrollbar-track{
background:#08111f;
}

::-webkit-scrollbar-thumb{
background:#2563eb;
border-radius:20px;
}

body::before{
content:"";
position:fixed;
width:700px;
height:700px;
background:#2563eb20;
filter:blur(120px);
top:-250px;
right:-250px;
pointer-events:none;
z-index:-1;
}

body::after{
content:"";
position:fixed;
width:700px;
height:700px;
background:#3b82f620;
filter:blur(120px);
bottom:-300px;
left:-300px;
pointer-events:none;
z-index:-1;
}
