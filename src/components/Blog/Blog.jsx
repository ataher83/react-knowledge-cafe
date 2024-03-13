import PropTypes from 'prop-types';

const Blog = ({blog}) => {    //{blog} prop পাঠানো হয়েছে 
    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;