var blogs = [{
    id: 1,
    title: "This is React Post",
    category: "Some Category",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic veritatis modi, temporibus, dolor itaque deserunt fugit similique culpa reiciendis perspiciatis asperiores esse repudiandae aspernatur necessitatibus fugiat.Minima doloribus et autem.",
    like: 300
}, {
    id: 2,
    category: "Some Category",
    title: "This is NextJS Post",
    content: "This project is created with React and NextJS.",
    like: 100

}, {
    id: 3,
    title: "This is Angular Post",
    category: "Some Category",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic veritatis modi, temporibus, dolor itaque deserunt fugit similique culpa reiciendis perspiciatis asperiores esse repudiandae aspernatur necessitatibus fugiat.Minima doloribus et autem.",
    like: 0
}, {
    id: 4,
    title: "This is Vite Post",
    category: "Some Category",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic veritatis modi, temporibus, dolor itaque deserunt fugit similique culpa reiciendis perspiciatis asperiores esse repudiandae aspernatur necessitatibus fugiat.Minima doloribus et autem.",
    like: 0
}, {
    id: 5,
    title: "This is Gatsby Post",
    category: "Some Category",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic veritatis modi, temporibus, dolor itaque deserunt fugit similique culpa reiciendis perspiciatis asperiores esse repudiandae aspernatur necessitatibus fugiat.Minima doloribus et autem.",
    like: 10
}, {
    id: 6,
    title: "This is Frontend Post",
    category: "Some Category",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Hic veritatis modi, temporibus, dolor itaque deserunt fugit similique culpa reiciendis perspiciatis asperiores esse repudiandae aspernatur necessitatibus fugiat.Minima doloribus et autem.",
    like: 0
}]

function addBlog(title, category, content) {
    let blog = {
        id: Date.now(),
        title: title,
        category: category,
        content: content
    }

    blogs = [...blogs, blog]
    return blog.id
}
function deleteBlog(id) {
    blogs = blogs.filter((blog) => blog.id != id)
    alert("Blog deleted with id" + id)
}

function getBlog(id) {
    return blogs.filter((blog) => blog.id == id)[0]
}

function addLike(id) {
    let blog = blogs.filter((b) => b.id == id)[0]
    blogs = blogs.filter((b) => b.id != id)
    blogs = [...blogs, { ...blog, like: (blog.like + 1) }]
}

function editBlog(id, title, category, content) {
    let blog = blogs.filter((b) => b.id == id)[0]
    blogs = blogs.filter((b) => b.id != id)
    blogs = [...blogs, { ...blog, title: title, category: category, content: content }]
}



export default blogs
export { blogs, addBlog, deleteBlog, getBlog, addLike, editBlog }