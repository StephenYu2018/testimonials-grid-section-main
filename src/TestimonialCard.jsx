
function TestimonialCard({ content, style }) {
  const textColor = {
    light: {
      'opacity-50': 'text-light-gray/50',
      'opacity-70': 'text-light-gray/70',
      'opaque': 'text-light-gray'
    },
    dark: {
      'opacity-50': 'text-very-dark-blackish-blue/50',
      'opacity-70': 'text-very-dark-blackish-blue/70',
      'opaque': 'text-very-dark-blackish-blue'
    },
  };

  return (
    <article className={
      `${style.gridArea} ${style.backgroundColor} px-8 pt-[1.625rem] 
      pb-8 rounded-lg`
    }>
      <div className="flex flex-row items-center space-x-4">
        <img src={content.pictureURL}
        className={
          `${style.pictureBorderColor} border-2 w-8 h-8 rounded-full`
        }
        />
        <div className="flex flex-col justify-end">
          <h3 className={`${textColor[style.textColor].opaque} font-barlow 
          font-semibold text-[0.86rem] leading-4`}>
            {content.fullName}
          </h3>
          <p className={
            `${textColor[style.textColor]['opacity-50']} font-barlow 
            font-medium text-[0.74rem]`
          }>
            Verified Graduate
          </p>
        </div>
      </div>
      <p className={
        `${textColor[style.textColor].opaque} font-barlow font-semibold 
        text-[1.24rem] leading-[1.2] mt-4`
      }>
        {content.title}
      </p>
      <blockquote className={
        `${textColor[style.textColor]['opacity-70']} font-barlow font-medium 
        text-[0.85rem] leading-[1.4] mt-5`
      }>
        {content.quote}
      </blockquote>
    </article>
  );
}

export default TestimonialCard;