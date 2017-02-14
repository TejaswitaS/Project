import React, { PropTypes } from 'react';

function SvgIcon(props) {
    const {glyph, ...rest} = props;
    return (
        <svg {...rest}>
            <use xlinkHref={glyph} />
        </svg>
    );
}

SvgIcon.propTypes = {
    glyph: PropTypes.string
}

export default SvgIcon;
