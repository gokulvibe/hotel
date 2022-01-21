import React from 'react';


// You have to pass src of the image in props
function FloatingImage(props) {
  return (
    <div
        className="elementor-element elementor-element-8a5e67a elementor-widget__width-inherit elementor-absolute elementor-widget elementor-widget-image"
        data-id="8a5e67a"
        data-element_type="widget"
        data-settings='{"craftcoffee_ext_is_scrollme":"true","craftcoffee_ext_scrollme_translatey":{"unit":"px","size":120,"sizes":[]},"_position":"absolute","craftcoffee_ext_scrollme_disable":"mobile","craftcoffee_ext_scrollme_smoothness":{"unit":"px","size":30,"sizes":[]},"craftcoffee_ext_scrollme_scalex":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_scaley":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_scalez":{"unit":"px","size":1,"sizes":[]},"craftcoffee_ext_scrollme_rotatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_rotatey":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_rotatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_translatex":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_scrollme_translatez":{"unit":"px","size":0,"sizes":[]},"craftcoffee_ext_is_smoove":"false","craftcoffee_ext_is_parallax_mouse":"false","craftcoffee_ext_is_infinite":"false","craftcoffee_ext_is_fadeout_animation":"false"}'
        data-widget_type="image.default"
    >
        <div className="elementor-widget-container">
            <div className="elementor-image">
                <img
                    width="350"
                    height="340"
                    src={props.src}
                    className="attachment-full size-full"
                    alt=""
                    loading="lazy"
                />
            </div>
        </div>
    </div>
  );
}

export default FloatingImage;
