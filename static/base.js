const toggleButton = document.getElementById('themeToggleBTN');
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;



if ((localStorage.getItem('theme') === 'dark')) {
  document.body.classList.add('dark');
}


// Listen for clicks on the toggle button
toggleButton.addEventListener('click', () => {
  // Toggle the class on the body
  document.body.classList.toggle('dark');
  
  // Save preference to localStorage
  if (document.body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    console.log("dark")
  } else {
    localStorage.setItem('theme', 'light');
  }
});