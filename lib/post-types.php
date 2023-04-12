<?php

/** Set post types */
add_action('init', 'createPostTypes');
function createPostTypes()
{
	register_post_type(
		'blog',
		array(
			'labels' => array(
				'name' => __('Blogovi'),
				'singular_name' => __('Blog')
			),
			'public' => true,
			'has_archive' => true,
			'rewrite' => array('slug' => 'blog'),
			'supports' => array('title', 'editor', 'thumbnail', 'excerpt', 'page-attributes'),
		)
	);

	register_post_type(
		'tretman',
		array(
			'labels' => array(
				'name' => __('Tretmani'),
				'singular_name' => __('Tretman')
			),
			'public' => true,
			'has_archive' => false,
			'rewrite' => array('slug' => 'tretman'),
			'supports' => array('title', 'thumbnail', 'excerpt', 'page-attributes', 'tretman-kategorija'),
		)
	);
}

add_action('init', 'createCustomTaxonomies');
function createCustomTaxonomies()
{
	register_taxonomy(
		'tretman-kategorija',
		array('tretman'),
		array(
			'label' => __('Tretman Kategorija', 'belviso'),
			'rewrite' => array('slug' => 'tretman-kategorija'),
			'hierarchical' => true,
			'show_in_rest' => true
		),
	);

	$field['choices'] = array();
	$choices = get_field('services', 'option');

	if ($choices) {
		foreach ($choices as $choice) {
			wp_insert_term(
				$choice['name'],
				'tretman-kategorija',
				array(
					'slug' => slugify($choice['name']),
					'description' => $choice['description']
				)
			);
		}
	}
}
