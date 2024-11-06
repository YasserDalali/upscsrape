import PropTypes from 'prop-types';

function Review({name ,position, review, company}) {


  return (
<div className=" flex flex-col  border bg-neutral-900 bg-opacity-70 z-10 border-neutral-600 shadow-sm rounded-xl">
    <div className="flex-auto p-4 md:p-6">
      <p className="mt-3 sm:mt-6 text-base text-white md:text-xl  line-clamp-5"><em>
          {review}
        </em></p>
    </div>
    <div className="p-4 rounded-b-xl md:px-6">
      <h3 className="text-sm font-semibold text-neutral-200 sm:text-base">
        {name}
      </h3>
      <p className="text-sm text-neutral-500">
        {position} | {company}
      </p>
    </div>

</div>
  )

  
}

Review.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  review: PropTypes.string.isRequired
};

export default Review