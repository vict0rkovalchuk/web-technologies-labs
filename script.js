function tabs(
  tabsContainer,
  tag,
  activeTab,
  container,
  prevTag,
  childTag,
  activeContentClass
) {
  $(tabsContainer).on('click', `${tag}:not(.${activeTab})`, function () {
    $(this)
      .addClass(activeTab)
      .siblings()
      .removeClass(activeTab)
      .closest(container)
      .find(`${prevTag} ${childTag}`)
      .removeClass(activeContentClass)
      .eq($(this).index())
      .addClass(activeContentClass);
  });
}

tabs(
  '.links',
  'a',
  'links__lab_active',
  '.tabs',
  '.labs',
  '.lab',
  'lab_active'
);

tabs(
  '.lab__description',
  'div',
  'lab__descriptor_active',
  '.labs',
  '.lab__subtabs',
  '.lab__container',
  'lab__container_active'
);
