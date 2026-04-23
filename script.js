function suggestOutfit() {
    let occasion = document.getElementById("occasion").value;
    let weather = document.getElementById("weather").value;

    let result = "";

    if (occasion === "college" && weather === "hot") {
        // result = "T-shirt + Jeans + Sneakers for males, Top+ Skirt + Sandals for females";
    window.location.href = "sum_col.html";
    } 
    else if (occasion === "college" && weather === "cold") {
        //result = "Hoodie + Sweater + Shoes for females, Hoodie + Sweater + Boots for males";
         window.location.href = "win_clg.html";
    } 
    else if (occasion === "party" && weather === "cold") {
        //result = "Stylish Dress + Heels for females, Jacket + Dress + Boots for males";
      window.location.href = "win_party.html";
    }
    else if (occasion === "party" && weather === "hot") {
        //result = "Light Dress + Sandals for females, Shirt + Shorts + Loafers for males";
     window.location.href = "sum_party.html";
    }
    else {
        // result = "Casual Outfit for both genders";
         window.location.href = "casual.html";
    }

    document.getElementById("result").innerText = result;
        // document.getElementById("outfitImage").src = image;
}

function suggestColor() {
    let color = document.getElementById("color").value;
    let result = "";

    if (color === "blue") {
        result = `
            <div class="color-box" style="background:white">white</div>
            <div class="color-box" style="background:gray">gray</div>
            <div class="color-box" style="background:black">black</div>
         <div class="color-box" style="background:navy">navy</div>
        `;
    } 
    else if (color === "black") {
        result = `
            <div class="color-box" style="background:white">white</div>
            <div class="color-box" style="background:red">red</div>
            <div class="color-box" style="background:beige">beige</div>
            <div class="color-box" style="background:navy">navy</div>
        `;
    } 
    else if (color === "red") {
        result = `
            <div class="color-box" style="background:white">white</div>
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:beige">beige</div>
            <div class="color-box" style="background:navy">navy</div>
        `;
    }
        else if (color === "white") {
        result = `
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:navy">navy</div>
            <div class="color-box" style="background:maroon">maroon</div>
        `;
    }  
      else if (color === "green") {
        result = `
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:navy">navy</div>
            <div class="color-box" style="background:white">white</div>
        `;
    }   
      else if (color === "orange") {
        result = `
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:navy">navy</div>
            <div class="color-box" style="background:white">white</div>
        `;
    }  
     else if (color === "brown") {
        result = `
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:navy">navy</div>
            <div class="color-box" style="background:white">white</div>
            <div class="color-box" style="background:beige">beige</div>
        `;
    } 
     else if (color === "yellow") {
        result = `
            <div class="color-box" style="background:black">black</div>
            <div class="color-box" style="background:navy">navy</div>
            <div class="color-box" style="background:maroon">maroon</div>
        `;
    }   
     
     

        else {
        result = `
            <div class="color-box" style="background:white">white</div>
            <div class="color-box"  style="background:black">black</div>
        `;
    }   

    document.getElementById("colorResult").innerHTML = result;
}