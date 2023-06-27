<?php
$pricelist = get_field('pricelist_categories', 'options');
$form_shortcode = get_field('form_shortcode');
$form_title = get_field('form_title');
?>

<section class="form">
  <div class="container">
    <div class="form__container">
      <div class="form__container-form">
        <h2><?php echo $form_title ?></h2>

        <?php echo $form_shortcode ?>
      </div>
    </div>
  </div>
  <div class="form__modal">
    <div class="form__modal-container">
      <div class="form__modal-container__top">
        <div class="form__modal-container__top-select-container">
          <p class="form__modal-container__top-select-title">Izaberite kategorije
            <svg class="form__modal-container__top-select-title-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px">
              <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="#BA1C68"></path>
            </svg>
          </p>
          <ul class="form__modal-container__top-select">
            <?php
            foreach ($pricelist as $list) { ?>
              <li class="form__modal-container__top-select-item"><?php echo ($list['name']); ?></li>
            <?php } ?>
          </ul>
        </div>
        <div class="form__modal-container__top-search-container">
          <input class="form__modal-container__top-search" type="search" placeholder="Pretažite tretmane">
          <svg class="form__modal-container__top-search-loop" width="15" height="15" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" fill="#FFFFFF" />
          </svg>
        </div>
      </div>
      <div class="form__modal-container__treatment-div">
        <?php
        foreach ($pricelist as $list) { ?>
          <div class="form__modal-container__treatment">
            <h2 class="form__modal-container__treatment-title"><?php echo ($list['name']); ?>
              <svg class="form__modal-container__treatment-title-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="20px" height="20px">
                <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" fill="#BA1C68" />
              </svg>
            </h2>
            <div class="form__modal-container__treatment-list">
              <div class="form__modal-container__treatment-list-first-item">
                <svg width="15" height="15" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.44156 4.064H7.39756L6.94956 5.982H8.78356V7.382H6.61356L5.96956 10H4.45756L5.11556 7.382H3.43556L2.80556 10H1.29356L1.93756 7.382H0.369563V5.982H2.27356L2.73556 4.064H1.02756V2.748H3.05756L3.71556 0.0599995H5.22756L4.55556 2.748H6.23556L6.87956 0.0599995H8.39156L7.73356 2.748H9.44156V4.064ZM5.45156 5.982L5.89956 4.064H4.23356L3.77156 5.982H5.45156Z" fill="#931752" />
                </svg>
                <p>Usluga</p>
                <p>Cena</p>
              </div>
              <?php foreach ($list['treatments'] as $treatment) { ?>
                <div class="form__modal-container__treatment-list-item">
                  <svg class="form__modal-container__treatment-list-item-checkbox" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="#E5E5E5" stroke="#E5E5E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M12 8V16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 12H16" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <svg class="form__modal-container__treatment-list-item-checkbox-active" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#BA1C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M22 4L12 14.01L9 11.01" stroke="#BA1C68" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p id="<?php echo $treatment['#'] ?>" class="form__modal-container__treatment-list-item-title"><?php echo $treatment['name']; ?></p>
                  <p>
                    <?php
                    $price = $treatment['price'];
                    if (strpos($price['amount'], '.') !== false) {
                      $amounts = explode('.', $price['amount']);
                      $formatted_amount = number_format($amounts[0], 0, ',', '.') . ' / ' . number_format($amounts[1], 0, ',', '.');
                    } else {
                      $formatted_amount = number_format($price['amount'], 0, ',', '.');
                    }
                    $formatted_price = $formatted_amount . ' ' . $price['currency'];
                    echo $formatted_price;
                    ?>
                  </p>
                </div>
              <?php } ?>
            </div>
          </div>
        <?php } ?>
      </div>
      <div class="form__modal-container__treatment-button">
        <a href="" class="button button-fill">Dodaj tretmane</a>
      </div>
    </div>
  </div>
</section>