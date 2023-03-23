
function TestimonialCard({ content, style }) {
  const textColor = {
    light: {
      'opacity-50': 'text-light-gray/50',
      'opacity-70': 'text-light-gray/70',
      'opaque': 'text-light-gray'
    },
    dark: {
      'opacity-50': 'text-very-dark-grayish-blue/50',
      'opacity-70': 'text-very-dark-grayish-blue/70',
      'opaque': 'text-very-dark-grayish-blue'
    },
  };

  const cardShadow = style.backgroundColor === 'bg-white'
    ? 'shadow-[40px_55px_50px_-50px_rgb(0,0,0,0.25)]'
    : 'shadow-none';

  return (
    <article className={
      `${style.gridArea} ${style.backgroundColor} px-8 pt-[1.625rem]
      pb-8 rounded-lg first-of-type:bg-quote-svg bg-no-repeat
      bg-[right_1.437rem_top] xl:bg-[right_5rem_top] ${cardShadow}`
    }>
      <div className="flex flex-row items-center space-x-4">
        <img src={content.pictureURL}
        alt={`${content.fullName}'s profile picture`}
        className={
          `${style.pictureBorderColor} border-2 w-8 h-8 rounded-full`
        }
        />
        <div className="flex flex-col justify-end">
          <h3 className={`${textColor[style.textColor].opaque} font-barlow
          font-medium text-[0.8rem] leading-4`}>
            {content.fullName}
          </h3>
          <p className={
            `${textColor[style.textColor]['opacity-50']} font-barlow
            font-medium text-[0.68rem]`
          }>
            Verified Graduate
          </p>
        </div>
      </div>
      <p className={
        `${textColor[style.textColor].opaque} font-barlow font-semibold
        text-[1.24rem] xl:text-[1.25rem] leading-[1.2]
        mt-[0.9rem] ${style.spaceBetweenProfileAndTitle}`
      }>
        {content.title}
      </p>
      <blockquote className={
        `${textColor[style.textColor]['opacity-70']} font-barlow font-medium
        text-[0.806rem] ${style.quoteRightPadding}leading-[1.4]
        mt-[0.9rem] ${style.spaceBetweenTitleAndQuote}`
      }>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;