<script>
  import { onMount } from 'svelte';
  // @ts-ignore
  import emailjs from '@emailjs/browser';



  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

const options = {
		direction: "left",
		speed: 20,
    gap: 80
	};

//API

// let posts = [];
// onMount(async()=>{
//   posts = await getPost()

// })

const getPost = async() =>{
  const res = await fetch("https://script.googleusercontent.com/macros/echo?user_content_key=BK0v4nxQjfDeWbBXmihxr_k-aikOvNdYr55I5Uwl2hIhsLuQnwRCC_dlS1fghfCNsf--u_yyWHRwVIsNjmK-EKUsG0kcXxXeOJmA1Yb3SEsKFZqtv3DaNYcMrmhZHmUMWojr9NvTBuBLhyHCd5hHayjLRpVDbGB-OUotDZWZPgqLokN-NPjXWVqkLCC29jA049guXy5ZORRNPAwMjt-faBwf12Hy0n-oadYPA7AnL3zEIjbqjkU-pOX2KnvcqMMGFZR6btdKBkCY8-paDNctvg&lib=Mbum4vK1UBQGVAhPrTFmiCEMqEnBOITdK")
  const data =await res.json()
  console.log(data)
  return data

}


//Email form
const sendEmail = (e) => {
  emailjs
    .sendForm('service_clp36fj', 'template_lo4w8tf', e.target, {
      publicKey: 'u9YkLHakFlSMU9Kyw',
    })
    .then(
      () => {
        console.log('SUCCESS!');
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
    document.querySelector('form').reset();

};


</script>




<head>
</head>





<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Creative Connect</title>
    <link rel="stylesheet" href="styles.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Nerko+One&family=Raleway:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

</head>
<body>
  <nav class="navbar">
    <div class="nav-container">
        <a href="#" class="logo">
            <img src="ccdxb.jpg" alt="Logo">
        </a>
        <div class="menu-toggle" id="menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-list" id="nav-list">
            <li class="nav-item"><a href="#hero">Home</a></li>
            <li class="nav-item"><a href="#about">About</a></li>
            <li class="nav-item"><a href="#contact">Contact</a></li>

        </ul>
    </div>
</nav>

<!-- #hero -->
    <section class="hero" id="hero" style="background-image: url('bg_image.svg');">
      <div class="hero-content">
        <div class="hero-text">
          <h1 style="font-family:'Raleway'">Welcome to</h1>
          <h1 style="font-family:Raleway; color:PaleTurquoise; font-size:64px" >Creative Connect</h1>
          <h1 style="font-family:'Raleway'; color:Pink; font-size:30px">#DXB</h1>

          <p>A supportive platform for creatives in Dubai offering connection, learning, support and inspiration.</p>
          <a href="#" class="cta-button">Join us</a>
        </div>
        <div class="hero-image">
            <img src="art.webp" alt="Hero Image">
        </div>
      </div>
      
  </section>


<!-- #about -->
  <!-- About Section -->
  <section class="about" id="about" style="background-image: url('dots.svg');">
    <div class="container">
        <div class="about-content">
            <div class="about-text">
                <h2>About Us</h2>
                <h3>Creative's sanctuary</h3>
                <p>
                  Join us for an inspiring morning of creativity and collaboration! Whether you're a graphic designer, artist, or just passionate about all things creative, this meetup is the perfect opportunity to connect with like-minded individuals.
                </p>
                <br>
                <p>
                  Share your latest projects, brainstorm new ideas, and get feedback in a relaxed, supportive environment. Don't miss out on the chance to spark your imagination and build valuable connections.
                </p>
            </div>
            <div class="about-image">
                <img src="creativity.png" alt="About Image">
            </div>
        </div>
    </div>
</section>

<section class="token" id="token" style="background-image: url('dots.svg');">
    <div class = "token_heading"><h2>Upcoming Event</h2></div>
    <div class="nft">
      <div class='main'>
        {#await getPost()}
        <img class='tokenImage' src="">
        {:then data}
        <!-- {JSON.stringify(data)} -->
        {#if data}
             <img class='tokenImage' src="{data.data[0].Image}">
        {/if}
        {/await}
        <h2>Creative Connect Event</h2>
        <p class='description'>DXB</p>
        <div class='tokenInfo'>
          <div class="price">
            <ins>◘</ins>

            {#await getPost()}
            <p>Loading...</p>
            {:then data}
            <!-- {JSON.stringify(data)} -->
            {#if data}
                <h2>{data.data[0].Time}</h2>
            {/if}
            {/await}

          </div>
          <div class="duration">
            <ins>◷</ins>

            {#await getPost()}
            <p>Loading...</p>
            {:then data}
            <!-- {JSON.stringify(data)} -->
            {#if data}
                <p>{data.data[0].Date}</p>
            {/if}
            {/await}

          </div>
        </div>
        <hr />
        <div class='creator'>
          <div class='wrapper'>
            <img src="https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80" alt="Creator" />
          </div>
          <p><ins>Topic</ins> 
            
            
            {#await getPost()}
            <p>Loading...</p>
            {:then data}
            <!-- {JSON.stringify(data)} -->
            {#if data}
                <p>{data.data[0].Topic}</p>
            {/if}
            {/await}
          </p>
        </div>
      </div>

    
</section>

  <!-- Contact Section -->
  <section class="contact" id="contact" style="background-image: url('dots.svg');">
    <div class="container">
        <h2>Contact Us <br> <br></h2>
        <div class="contact-content">
            <div class="contact-form">

                <form on:submit|preventDefault={sendEmail}>
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="user_name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="user_email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" value="Send" class="submit-button">Send Message</button>
                </form>

            </div>
            <div class="contact-info">
                <h3>Get in Touch</h3>
                <p><strong>Email:</strong> info@mail.com</p>
                <p><strong>Phone:</strong> +123-456-7890</p>
                <p><strong>Address:</strong> Creative Connect Street, Dubai, AE</p>
                <p>Feel free to reach out to us with any questions or inquiries.</p>
            </div>
        </div>
    </div>
</section>






<!-- Footer Section -->
<footer class="footer">
    <div class="container">
        <div class="footer-content">
            <p>&copy; 2024 Creative Connect DXB. All rights reserved.</p>
            <ul class="social-links">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">LinkedIn</a></li>
                <li><a href="#">Instagram</a></li>
            </ul>
        </div>
    </div>
</footer>





</body>
</html>