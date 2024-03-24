let x = document.getElementById("portf");

x.style.display = "flex";
x.style.flexWrap = "wrap";
x.style.justifyContent = "space-between";
x.style.gap = "15px 0";

for (let i = 1; i <= 6; i++) {
  let y = document.createElement("div");

  y.style.display = "flex";
  y.style.flexDirection = "column";
  y.style.width = "32.5%";

  let f = document.createElement("img");

  f.src = "assets/image/mountains.jpg";
  f.style.height = "256px";
  f.style.width = "100%";

  let r = document.createElement("div");

  r.style.display = "flex";
  r.style.flexDirection = "column";
  r.style.gap = "20px";
  r.style.padding = "16px";
  r.style.background = "white";

  let s = document.createElement("p");

  s.innerText = "Lorem ipsum";
  s.style.fontSize = "15px";
  s.style.fontFamily = '"Raleway", sans-serif';
  s.style.fontWeight = "600";

  let t = document.createElement("p");

  t.innerText =
    "Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.";
  t.style.fontSize = "15px";
  t.style.fontFamily = '"Raleway", sans-serif';

  if (i === 2) {
    f.src = "assets/image/lights.jpg";
  } else if (i === 3) {
    f.src = "assets/image/nature.jpg";
  } else if (i === 4) {
    f.src = "assets/image/p1.jpg";
  } else if (i === 5) {
    f.src = "assets/image/p2.jpg";
  } else if (i === 6) {
    f.src = "assets/image/p3.jpg";
  }

  x.appendChild(y);
  y.appendChild(f);
  y.appendChild(r);
  r.appendChild(s);
  r.appendChild(t);
}

let z = document.getElementById("pictures");

z.style.width = "100%";
z.style.display = "flex";
z.style.justifyContent = "space-between";

for (i = 1; i <= 2; i++) {
  let g = document.createElement("div");

  g.style.width = "49.3%";
  g.style.height = "365px";

  let w = document.createElement("img");

  w.src = "assets/image/avatar_g.jpg";
  w.style.width = "100%";
  w.style.height = "100%";

  z.appendChild(g);
  g.appendChild(w);

  if (i === 2) {
    w.src = "assets/image/me2.jpg";
  }
}

let r = document.getElementById("percent");

r.style.width = "100%";
r.style.display = "flex";
r.style.flexDirection = "column";
r.style.gap = "16px";

for (let i = 1; i <= 3; i++) {
  let x = document.createElement("div");

  x.style.width = "100%";

  x.style.display = " flex";
  x.style.flexDirection = "column";
  x.style.gap = "16px";

  let y = document.createElement("p");

  y.innerText = "Photography";
  y.style.fontFamily = '"Raleway", sans-serif';
  y.style.fontSize = "15px";
  y.style.fontWeight = "400";

  let u = document.createElement("div");

  u.style.width = "100%";
  u.style.height = "38.5px";
  u.style.background = "#9e9e9e";

  let p = document.createElement("div");

  p.style.width = "95%";
  p.style.height = "100%";
  p.style.background = "#616161";
  p.style.display = "flex";
  p.style.justifyContent = "center";
  p.style.alignItems = "center";

  let a = document.createElement("p");

  a.innerText = "95%";
  a.style.fontFamily = '"Raleway", sans-serif';
  a.style.color = "white";
  a.style.fontSize = "15px";

  if (i === 2) {
    p.style.width = "85%";
    a.innerText = "85%";
    y.innerText = "Web Design";
  } else if (i === 3) {
    p.style.width = "80%";
    a.innerText = "80%";
    y.innerText = "Photoshop";
  }

  r.appendChild(x);
  x.appendChild(y);
  x.appendChild(u);
  u.appendChild(p);
  p.appendChild(a);
}

let a = document.getElementById("charge-table");

a.style.display = "flex";
a.style.justifyContent = "space-between";

for (let i = 1; i <= 3; i++) {
  let x = document.createElement("div");

  x.style.width = "32.6%";

  a.appendChild(x);

  for (g = 1; g <= 7; g++) {
    let s = document.createElement("div");

    s.style.width = "100%";
    s.style.height = "55px";
    s.style.background = "white";
    s.style.border = "1px solid #ddd";
    s.style.borderTop = "none";
    s.style.display = "flex";
    s.style.justifyContent = "center";
    s.style.alignItems = "center";

    let m = document.createElement("p");

    m.innerText = "Basic";
    if (i === 2) {
      m.innerText = "Pro";
    } else if (i === 3) {
      m.innerText = "Premium";
    }
    m.style.fontFamily = '"Raleway", sans-serif';
    m.style.fontSize = "15px";
    m.style.fontWeight = "400";

    if (g === 1) {
      s.style.height = "100px";
      s.style.background = "black";
      if (i === 2) {
        s.style.background = "#009688";
      } else if (i === 3) {
        s.style.background = "#616161";
      }
      s.style.border = "none";
      s.style.borderBottom = "1px solid #ddd";
      m.style.color = "white";
      m.style.fontSize = "24px";
    } else if (g > 1 && g <= 5) {
      s.style.height = "55px";
      if (g === 2) {
        m.innerText = "Web Design";
      } else if (g === 3) {
        m.innerText = "Photography";
      } else if (g === 4) {
        m.innerText = "10GB Storage";
        if (i === 2) {
          m.innerText = "50GB Storage";
        } else if (i === 3) {
          m.innerText = "Unlimited Storage";
        }
      }
      if(g === 5){
        m.innerText = ''
      }
    }

    x.appendChild(s);
    s.appendChild(m);
  }
}
