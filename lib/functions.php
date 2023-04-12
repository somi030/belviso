<?php

/**
 * Fetch asset
 * Returns path to any graphical asset
 * @param string $asset
 * @example fetchAsset('js/main.bundle.js')
 * @return string
 */
function fetchAsset($asset)
{
	return (get_template_directory_uri() . '/build/assets/' . $asset);
}

function slugify($text, string $divider = '-')
{
	// replace non letter or digits by divider
	$text = preg_replace('~[^\pL\d]+~u', $divider, $text);

	// transliterate
	$text = iconv('utf-8', 'us-ascii//TRANSLIT', $text);

	// remove unwanted characters
	$text = preg_replace('~[^-\w]+~', '', $text);

	// trim
	$text = trim($text, $divider);

	// remove duplicate divider
	$text = preg_replace('~-+~', $divider, $text);

	// lowercase
	$text = strtolower($text);

	if (empty($text)) {
		return 'n-a';
	}

	return $text;
}
// function generateHeader($class)
// {
// 	$text = get_field('header_text');
// 	$size = get_field('header_size');


// 	if ($text) {
// 		return '<' . $size . ' class="' . $class . '">' . $text . '</' . $size . '>';
// 	}
// }

// function generateHeaderLink($class)
// {
// 	$show_link = get_field('header_show_link');
// 	$link = get_field('header_link');

// 	if ($show_link && $link) {
// 		return '<a href="' . $link['url'] . '" class="header-link ' . $class . '">' . $link['title'] . file_get_contents(locate_template('partials/icons/arrow-right-icon.php')) . '</a>';
// 	}
// }

// function generateText($class, $fieldName)
// {
// 	$text = get_field($fieldName);

// 	return generateTextWithObject($class, $text);
// }

// function generateTextWithObject($class, $text)
// {
// 	if ($text) {
// 		return '<p class="' . $class . '">' . $text . '</p>';
// 	}
// }


// function generateLink($class, $fieldName = 'link')
// {
// 	$link = get_field($fieldName);

// 	if ($link) {
// 		return '<a href="' . $link['url'] . '" class="' . $class . '">' . $link['title'] . '</a>';
// 	}
// }

// function generateImage($class, $fieldName = 'image')
// {
// 	$img = get_field($fieldName);

// 	return generateImageWithObject($class, $img);
// }

// function generateImageWithObject($class, $img)
// {
// 	if ($img) {
// 		return '<img class="' . $class . '" src="' . $img['url'] . '" alt="' . $img['title'] . '" />';
// 	}
// }

// function generateDropdownDisplay()
// {
// 	$displayDropdown = get_field('display_dropdown');

// 	if ($displayDropdown == 'second-dropdown') {
// 		echo 'first-dropdown ' . $displayDropdown;
// 	} else if ($displayDropdown != 'not') {
// 		echo $displayDropdown;
// 	}
// }

// function generateID()
// {
// 	$id = get_field('display_id');

// 	if ($id) {
// 		echo 'id="' . $id . '"';
// 	}
// }


function defineBackgroundImage($field)
{
	if ($field) {
		echo "background-image:url('" . $field['url'] . "')";
	}
}
