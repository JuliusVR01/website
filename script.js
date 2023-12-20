document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  contentDiv.innerHTML = "";

  document.body.classList.add("show-footer");

  function loadContent(targetId) {
    const contentMap = {
      home: `
          <div class="content-box">
              <h2>Home</h2>
              <div>
                  <h3>About</h3>
                  <p>
                  Hello, everyone! I'm Julius Van Ryn M. Acenas, a dedicated IT student with a passion for exploring the vast and dynamic realm of technology. My journey is fueled by the excitement of solving intricate problems through innovative solutions. Currently, I am honing my skills in programming and web development to shape myself into a versatile IT professional. Beyond the lines of code, I find joy in creating websites, even though I find it challenging. I'm also passionate about video editing and playing online games, adding a touch of creativity to my technical pursuits.
                  </p>
              </div>
              <div>
                  <h3>Add me on my social media!</h3>
                  <p>Connect with me on my social media pages to stay updated on my IT endeavors:</p>
                  <p>
                   <a href="https://www.facebook.com/juliusmangahasacenas?mibextid=ZbWKwL" target="_blank"><i class="fab fa-facebook"></i> Facebook</a><br>
                   <a href="https://github.com/JuliusVR01" target="_blank"><i class="fab fa-github"></i> GitHub</a>
                  </p>
                  </p>
              </div>
              <div>
                  <h3>How I see myself 8 years from now?</h3>
                  <p>In the next eight years, I envision a thriving journey in technology as a skilled web developer and versatile programmer. I see myself contributing to innovative projects, shaping the digital landscape with expanded expertise in various programming languages and front-end technologies like HTML, CSS, and JavaScript.<br><br>
                  My portfolio will showcase not only technical proficiency but also creative problem-solving skills, reflecting dynamic contributions to websites, algorithms, and open-source initiatives. Actively engaging in the tech community through networking, conferences, and potential mentorship, I anticipate continuous learning and personal growth.<br><br>
                  Looking ahead, my commitment to innovation and learning will drive success, allowing me to be a positive force in the digital realm, making meaningful contributions to projects that impact users and society.</p>
                  <img src="images/infogra.png" alt="Infographic">
                  </div>
          </div>
      `,
      blog: `
      <div class="content-box">
      <h2>Blog</h2>
      <br>
      <div class="blog-container">
        <div class="blog-post" onclick="loadContent('blog-post-1')">
        <img src="images/b1.jpg" alt="Image 1">
          <h3>Navigating the Coding Landscape: A Personal Journey with the Programming 1 Mentoring Program</h3>
          <h6>Publication Date: December 16, 2023</h6>
          <p>Embarking on the Programming 1 Mentoring Program has been nothing short of a transformative experience, illuminating the intricacies of fundamental programming concepts and paving the way for my growth as an IT student. In this reflective blog post, I share the invaluable insights gained through this program and how it has become a cornerstone in my journey toward programming proficiency.</p>
          <a href="blogpost1.html" onclick="loadContent('blog-post-1')" target="_blank">Read More</a>
          </div>
    
        <div class="blog-post" onclick="loadContent('blog-post-2')">
        <img src="images/b2.jpg" alt="Image 2">
          <h3>Rooted in Purpose: My NSTP Tree Planting Experience and the Journey of Growing Green Hope</h3>
          <h6>Publication Date: December 16, 2023</h6>
          <p>Nature is not just a part of our lives; it is our life. Recognizing the profound impact of environmental conservation, my journey with the National Service Training Program (NSTP) recently led me to a transformative experience — tree planting. In this blog post, I share the insights gained, the hands-on moments in the soil, and the growth of a green hope for a better, more sustainable future.</p>
          <a href="blogpost2.html" onclick="loadContent('blog-post-1')" target="_blank">Read More</a>
        </div>
    
        <div class="blog-post" onclick="loadContent('blog-post-3')">
        <img src="images/b3.jpg" alt="Image 3">
          <h3>Intramural Odyssey: A Tapestry of Joy, Friendship, and Intense Play</h3>
          <h6>Publication Date: December 16, 2023</h6>
          <p>In the bustling world of academia, where lectures and exams dominate the scene, there exists a hidden realm where joy blossoms, friendships flourish, and intense gameplay takes center stage—the Intramurals. This is not just a series of matches; it's a vibrant tapestry of experiences that weave together to create lasting memories. Join me as I recount the moments that made my Intramural journey unforgettable, filled with newfound friendships and heart-pounding excitement across various sports like volleyball and basketball.</p>
          <a href="blogpost3.html" onclick="loadContent('blog-post-1')" target="_blank">Read More</a>
        </div>
      </div>
    
      <div>
        <h3>Favorite Highlights</h3>
        <p>In the vibrant tapestry of my university experience in 2023, three distinct chapters stand out as my absolute favorites, weaving together a narrative of personal growth, environmental consciousness, and vibrant camaraderie. Embarking on the Programming 1 Mentoring Program marked a transformative chapter in my academic journey, illuminating the intricacies of fundamental programming concepts and laying a solid foundation for my proficiency in coding. Rooted in Purpose, my engagement in the NSTP Tree Planting program became a hands-on commitment to environmental conservation, growing a green hope for a better, more sustainable future. Finally, the Intramural Odyssey emerged as a hidden realm within academia, where joy, friendship, and intense gameplay took center stage. More than a series of matches, it became a vibrant tapestry of experiences—unforgettable moments of newfound friendships and heart-pounding excitement in sports like volleyball and basketball. As I reflect on the year, these three highlights collectively define the essence of my university journey—a tapestry woven with purpose, growth, and the enduring power of shared moments that made 2023 truly unforgettable.
        </p>
      </div>
    </div>
      `,
      flex: `
          <div class="content-box">
              <h2>Flex</h2>
              <div>
                  <h3>Biggest Flex</h3>
                  <p>One thing of which I'm immensely proud is the extraordinary power of resilience ingrained within me. It's not just a characteristic; it's a profound ability that allows me to endure, adapt, and emerge stronger from life's inevitable challenges and setbacks.<br><br>
                  Whether I envision myself overcoming personal hurdles, witness my own resilience facing adversities, or acknowledge my triumph over collective difficulties, the resilience within is truly awe-inspiring. It's remarkable how I can turn hardships into opportunities, setbacks into stepping stones, and failures into valuable lessons.<br><br>   
                  This journey is not solitary; it's shaped and strengthened by the unwavering support of my family, the camaraderie of friends, and the encouragement from classmates. Observing this innate human ability within myself—to rise, persist, and grow—fuels not only my pride but also deep admiration for my own spirit.<br><br>
                  I take special pride in the way I support myself, the empathy that drives me to help when needed, and the resilience that shapes my character. It's a constant reminder that, despite the complexities of life, my own capacity for resilience, coupled with the support of my family, friends, and classmates, stands as an enduring beacon of hope and strength.<br><br>
                  The unwavering support of my family has been the bedrock upon which my resilience has flourished. Their encouragement, understanding, and unconditional love have created a nurturing environment that empowers me to face life's challenges with unwavering determination. In times of struggle, my parents have been beacons of wisdom, offering guidance that goes beyond mere advice—it's a reflection of the shared experiences and collective strength that family provides.<br><br>
                  Their support is not just a safety net but a catalyst for personal growth. Knowing that I have a family standing firmly behind me has instilled a profound sense of security, allowing me to take risks, embrace change, and pursue my goals with confidence. Their belief in my capabilities, even during moments of self-doubt, has been a driving force that propels me forward.<br><br>
                  In the grand tapestry of resilience, my family's role is undeniable. They are the silent pillars that have fortified my spirit, allowing me to weather storms and emerge stronger on the other side. Their love and support have not only shaped my character but have also been instrumental in transforming challenges into opportunities for personal evolution. In every success and triumph, there's a reflection of the familial foundation that has been an unwavering source of strength and encouragement.
                  </p>
              </div>
          </div>
      `,
    };

    contentDiv.classList.remove("show");
    setTimeout(() => {
      contentDiv.innerHTML = contentMap[targetId];
      contentDiv.classList.add("show");
    }, 500);

    contentDiv.scrollIntoView({ behavior: "smooth" });
  }

  loadContent("home");

  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = event.target.getAttribute("href").substring(1);
      loadContent(targetId);
    });
  });

  document.body.classList.add("show-footer");
});