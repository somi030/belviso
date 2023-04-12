<?php

/** TRETMANI ---------- */

/** Add and rearrange columns to News post type */
function addTreatmentsListColumns($columns)
{
    $columns = array(
        'cb'        => $columns['cb'],
        'thumbnail' => __('Image thumbnail', 'belviso'),
        'kategorija' => __('Kategorija', 'belviso'),
        'title'     => $columns['title'],
        'date'      => $columns['date'],
    );

    return $columns;
}
add_filter('manage_tretman_posts_columns', 'addTreatmentsListColumns');

/** Modify News post type columns to include what we want */
function modifyTreatmentsListColumns($column, $postID)
{
    switch ($column) {
        case 'thumbnail':
            echo wp_get_attachment_image(get_post_thumbnail_id($postID), 'thumbnail', '');
            break;
        case 'kategorija':
            // var_dump(get_field('tretman-kategorija', $postID));
            break;
    }
}
add_action('manage_tretman_posts_custom_column', 'modifyTreatmentsListColumns', 10, 2);
