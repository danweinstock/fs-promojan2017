<form id="newsletter-signup" action="http://fit.us5.list-manage.com/subscribe/post?u=260571130bb442f2b3b773699&id=5886f6f5a7" method="post">
  <div class="email-input">
    	<label for "email" class="field-tag">email</label>
      <input name="MERGE0" id="MERGE0" class="" type="email" placeholder="e.g. johnsmith@fitbit.com" data-rule-email="true" data-rule-required="true" />
      <em class="form-error hidden"></em>
  </div>

  <label class="hidden">Submit your email address and join our mailing list.</label>
  <?php if (is_page_template("page-app.php")) : ?>
  <input type="submit" value="Submit" class="translate button greenLight" />
  <?php else: ?>
  <input type="submit" value="Submit" class="translate button bg-persimmon" />
<?php endif; ?>


  <div class="newsletter-success hidden">
    <p>Almost finished... We need to confirm your email address. To
    complete the subscription process, please click the link in the email
    we just sent you.</p>
  </div>
</form>
