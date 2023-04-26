const Footer = () => {
    return(
      <div className="footer">
        <h2>3DWINE🍷🍇 SHOPCENTER</h2>
    
<i class="bi bi-messenger"></i>
<i class="bi bi-facebook"></i>
<i class="bi bi-whatsapp"></i>
<i class="bi bi-github"></i>
<i class="bi bi-instagram"></i>
<i class="bi bi-linkedin"></i>
<i class="bi bi-telegram"></i>
<i class="bi bi-youtube"></i>


<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">@</span>
  <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
</div>


<div class="input-group mb-3">
  <span class="input-group-text">$</span>
  <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)"/>
  <span class="input-group-text">.00</span>
</div>

<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Username" aria-label="Username"/>
  <span class="input-group-text">@</span>
  <input type="text" class="form-control" placeholder="Server" aria-label="Server"/>
</div>


      </div>
  
    )
}
export default Footer;
