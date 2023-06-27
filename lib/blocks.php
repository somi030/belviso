<?php

/** ACF blocks */
global $acfBlocks;
$acfBlocks = array();

// $acfBlocks[] = array(
// 	'name'			=> 'spacer',
// 	'title'			=> __('Spacer Block'),
// 	'render_template'   => get_template_directory() . '/partials/spacer-block.php',
// 	'category'		=> 'formatting',
// 	'icon'			=> 'feedback',
// 	'mode'			=> 'edit',
// 	'keywords'		=> array('spacer')
// );

$acfBlocks[] = array(
	'name'			=> 'form-block',
	'title'			=> __('Form Block'),
	'render_template'   => get_template_directory() . '/partials/form-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('form', 'block')
);

$acfBlocks[] = array(
	'name'			=> 'background-cta-block',
	'title'			=> __('Background CTA Block'),
	'render_template'   => get_template_directory() . '/partials/background-cta-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('background', 'cta', 'block')
);

$acfBlocks[] = array(
	'name'			=> 'hero',
	'title'			=> __('Hero Block'),
	'render_template'   => get_template_directory() . '/partials/hero-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('hero', 'main')
);

$acfBlocks[] = array(
	'name'			=> 'cta',
	'title'			=> __('CTA Block'),
	'render_template'   => get_template_directory() . '/partials/cta-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('cta', 'call', 'to', 'action')
);

$acfBlocks[] = array(
	'name'			=> 'services-slider',
	'title'			=> __('Services Slider Block'),
	'render_template'   => get_template_directory() . '/partials/services-slider-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('services', 'slider')
);

$acfBlocks[] = array(
	'name'			=> 'sales',
	'title'			=> __('Sales Block'),
	'render_template'   => get_template_directory() . '/partials/sales-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('sales')
);

$acfBlocks[] = array(
	'name'			=> 'blogs',
	'title'			=> __('Blogs Block'),
	'render_template'   => get_template_directory() . '/partials/blogs-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('blogs')
);

$acfBlocks[] = array(
	'name'			=> 'brands-slider',
	'title'			=> __('Brands Slider Block'),
	'render_template'   => get_template_directory() . '/partials/brands-slider-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('brands', 'slider')
);

$acfBlocks[] = array(
	'name'			=> 'breadcrumb',
	'title'			=> __('Breadcrumb Block'),
	'render_template'   => get_template_directory() . '/partials/breadcrumb-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('breadcrumb')
);

$acfBlocks[] = array(
	'name'			=> 'gallery',
	'title'			=> __('Gallery Block'),
	'render_template'   => get_template_directory() . '/partials/gallery-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('gallery')
);

$acfBlocks[] = array(
	'name'			=> 'pricing-list',
	'title'			=> __('Pricing List Block'),
	'render_template'   => get_template_directory() . '/partials/pricing-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('pricing', 'list')
);

$acfBlocks[] = array(
	'name'			=> 'contact',
	'title'			=> __('Contact Block'),
	'render_template'   => get_template_directory() . '/partials/contact-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('contact')
);

$acfBlocks[] = array(
	'name'			=> 'jobs-list',
	'title'			=> __('Jobs List Block'),
	'render_template'   => get_template_directory() . '/partials/jobs-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('jobs', 'list')
);

$acfBlocks[] = array(
	'name'			=> 'services-list',
	'title'			=> __('Services List Block'),
	'render_template'   => get_template_directory() . '/partials/services-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('services', 'list')
);

$acfBlocks[] = array(
	'name'			=> 'blogs-list',
	'title'			=> __('Blogs List Block'),
	'render_template'   => get_template_directory() . '/partials/blogs-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('blogs', 'list')
);

$acfBlocks[] = array(
	'name'			=> 'treatments-list',
	'title'			=> __('Treatments List Block'),
	'render_template'   => get_template_directory() . '/partials/treatments-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('treatments', 'list')
);

$acfBlocks[] = array(
	'name'			=> 'sales-list',
	'title'			=> __('Sales List Block'),
	'render_template'   => get_template_directory() . '/partials/sales-list-block.php',
	'category'		=> 'formatting',
	'icon'			=> 'feedback',
	'mode'			=> 'edit',
	'keywords'		=> array('sales', 'list')
);

/** Limit to ACF-Gutenberg blocks only */
add_filter('allowed_block_types', 'limitBlockTypes');
function limitBlockTypes($allowedBlocks)
{
	global $acfBlocks;

	$allowedBlocks = array();
	foreach ($acfBlocks as $acfBlock) {
		$allowedBlocks[] = 'acf/' . $acfBlock['name'];
	}

	return $allowedBlocks;
}

/** Register ACF-Gutenberg blocks */
add_action('acf/init', 'acfgRegisterBlocks');
function acfgRegisterBlocks()
{
	if (!function_exists('acf_register_block_type')) return;

	global $acfBlocks;
	foreach ($acfBlocks as $acfBlock) {
		acf_register_block_type($acfBlock);
	}
}
