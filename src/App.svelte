<script>
  document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

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
            <img src="src/assets/ccdxb.jpg" alt="Logo">
        </a>
        <div class="menu-toggle" id="menu-toggle">
            <div class="bar"></div>
            <div class="bar"></div>
            <div class="bar"></div>
        </div>
        <ul class="nav-list" id="nav-list">
            <li class="nav-item"><a href="#">Home</a></li>
            <li class="nav-item"><a href="#">About</a></li>
            <li class="nav-item"><a href="#">Contact</a></li>

        </ul>
    </div>
</nav>

<!-- #hero -->
    <section class="hero">
      <div class="hero-content">
          <h1 style="font-family:'Raleway'">Welcome to</h1>
          <h1 style="font-family:Raleway; color:cyan; font-size:64px" >Creative Connect</h1>
          <h1 style="font-family:'Raleway'; color:HotPink; font-size:30px">#DXB</h1>

          <p>A supportive platform for creatives in Dubai offering connection, learning, support and inspiration.</p>
          <a href="#" class="cta-button">Join us</a>
      </div>
  </section>

<!-- #about -->
  <!-- About Section -->
  <section class="about">
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
                <img src="src/assets/test.jpg" alt="About Us">
            </div>
        </div>
    </div>
</section>

  <!-- Contact Section -->
  <section class="contact">
    <div class="container">
        <h2>Contact Us <br> <br></h2>
        <div class="contact-content">
            <div class="contact-form">
                <form action="#" method="post">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Message</label>
                        <textarea id="message" name="message" rows="5" required></textarea>
                    </div>
                    <button type="submit" class="submit-button">Send Message</button>
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