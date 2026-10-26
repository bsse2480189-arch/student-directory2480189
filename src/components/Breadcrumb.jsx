// Breadcrumb component: "Home > Students" jaisa navigation path dikhata hai (is project mein use nahi ho raha)
function Breadcrumb() {
  // UI return ho rahi hai
  return (
    // breadcrumb-wrap: apni CSS class (styles.css mein)
    <div className="breadcrumb-wrap">
      {/* container: content center karta hai */}
      <div className="container">
        {/* nav tag, aria-label screen readers ke liye hai */}
        <nav aria-label="breadcrumb">
          {/* ol: ordered list, Bootstrap breadcrumb class, mb-0 = neeche margin nahi */}
          <ol className="breadcrumb mb-0">
            {/* pehla item: Home, link "#directory" section par jata hai */}
            <li className="breadcrumb-item"><a href="#directory">Home</a></li>
            {/* doosra item: Students, active matlab current page, aria-current screen readers ko batata hai */}
            <li className="breadcrumb-item active" aria-current="page">Students</li>
          {/* ol khatam */}
          </ol>
        {/* nav khatam */}
        </nav>
      {/* container khatam */}
      </div>
    {/* wrapper div khatam */}
    </div>
  );
}
// default export
export default Breadcrumb;
