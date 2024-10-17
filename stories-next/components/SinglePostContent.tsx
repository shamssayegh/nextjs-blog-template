// src/components/SinglePostContent.tsx
const SinglePostContent = () => {
    return (
      <div className="single-content2">
        <div className="entry-header mb-50">
          <h1 className="entry-title mb-30 font-weight-900">
            Helpful Tips for Working from Home as a Freelancer
          </h1>
          <div className="row">
            <div className="col-md-6">
              <div className="entry-meta align-items-center meta-2 font-small color-muted">
                <p className="mb-5">
                  <a className="author-avatar" href="#"><img className="img-circle" src="/assets/imgs/author.png" alt="Author" /></a>
                  By <a href="/author/barbara-cartland"><span className="author-name font-weight-bold">Barbara Cartland</span></a>
                </p>
                <span className="mr-10">15 April 2020</span>
                <span className="has-dot">8 mins read</span>
              </div>
            </div>
          </div>
        </div>
  
        <figure className="image mb-30 m-auto text-center">
          <img className="border-radius-10" src="/assets/imgs/post-image.png" alt="Post Title" />
        </figure>
  
        <article className="entry-wraper mb-50">
          <div className="excerpt mb-30">
            <p>Here are some helpful tips for freelancers working from home...</p>
          </div>
          <div className="entry-main-content dropcap">
            <p>Working from home as a freelancer can be both rewarding and challenging. Here are some tips to stay productive and maintain a healthy work-life balance...</p>
            <hr className="wp-block-separator is-style-dots" />
            <p>Another important factor is managing your time effectively...</p>
          </div>
        </article>
      </div>
    );
  };
  
  export default SinglePostContent;
  