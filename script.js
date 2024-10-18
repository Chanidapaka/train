function openTab(tabName) {
          // Hide all tab contents
          const contents = document.querySelectorAll('.tab-content');
          contents.forEach(content => {
              content.style.display = 'none';
          });
      
          // Show the selected tab content
          document.getElementById(tabName).style.display = 'block';
      }
      
      // เปิดแท็บแรกเมื่อโหลดหน้า
      window.onload = function() {
          openTab('about');
      };
      