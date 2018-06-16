/*
 * Copyright (c) 2014
 *
 * @author Vincent Petry
 * @copyright 2014 Vincent Petry <pvince81@owncloud.com>
 *
 * This file is licensed under the Affero General Public License version 3
 * or later.
 *
 * See the COPYING-README file.
 *
 */

(function() {

	/**
	 * @class OCA.Files.Navigation
	 * @classdesc Navigation control for the files app sidebar.
	 *
	 * @param $el element containing the navigation
	 */
	var Navigation = function($el) {
		this.initialize($el);
	};

	/**
	 * @memberof OCA.Files
	 */
	Navigation.prototype = {

		/**
		 * Currently selected item in the list
		 */
		_activeItem: null,

		/**
		 * Currently selected container
		 */
		$currentContent: null,

		/**
		 * Key for QuickAccesselement selected item in the list
		 */
		QuickAccessKey: "#quickaccess-list",
		/**
		 * Initializes the navigation from the given container
		 *
		 * @private
		 * @param $el element containing the navigation
		 */
		initialize: function($el) {
			this.$el = $el;
			this._activeItem = null;
			this.$currentContent = null;
			this._setupEvents();
		},

		/**
		 * Setup UI events
		 */
		_setupEvents: function() {
			this.$el.on('click', 'li a', _.bind(this._onClickItem, this))
			this.$el.on('click', 'li button', _.bind(this._onClickMenuButton, this));
			this.$el.on('click', 'li input', _.bind(this._onClickMenuItem, this));
		},

		/**
		 * Returns the container of the currently active app.
		 *
		 * @return app container
		 */
		getActiveContainer: function() {
			return this.$currentContent;
		},

		/**
		 * Returns the currently active item
		 * 
		 * @return item ID
		 */
		getActiveItem: function() {
			return this._activeItem;
		},

		/**
		 * Switch the currently selected item, mark it as selected and
		 * make the content container visible, if any.
		 *
		 * @param string itemId id of the navigation item to select
		 * @param array options "silent" to not trigger event
		 */
		setActiveItem: function(itemId, options) {
			var oldItemId = this._activeItem;
			if (itemId === this._activeItem) {
				if (!options || !options.silent) {
					this.$el.trigger(
						new $.Event('itemChanged', {itemId: itemId, previousItemId: oldItemId})
					);
				}
				return;
			}
			this.$el.find('li').removeClass('active');
			if (this.$currentContent) {
				this.$currentContent.addClass('hidden');
				this.$currentContent.trigger(jQuery.Event('hide'));
			}
			this._activeItem = itemId;
			this.$el.find('li[data-id=' + itemId + ']').addClass('active');
			this.$currentContent = $('#app-content-' + itemId);
			this.$currentContent.removeClass('hidden');
			if (!options || !options.silent) {
				this.$currentContent.trigger(jQuery.Event('show'));
				this.$el.trigger(
					new $.Event('itemChanged', {itemId: itemId, previousItemId: oldItemId})
				);
			}
		},

		/**
		 * Returns whether a given item exists
		 */
		itemExists: function(itemId) {
			return this.$el.find('li[data-id=' + itemId + ']').length;
		},

		/**
		 * Event handler for when clicking on an item.
		 */
		_onClickItem: function(ev) {
			var $target = $(ev.target);
			var itemId = $target.closest('li').attr('data-id');
			if (!_.isUndefined(itemId)) {
				this.setActiveItem(itemId);
			}
			ev.preventDefault();
		},
		/**
		 * Event handler for when clicking on an item.
		 */
		_onClickMenuButton: function(ev) {
			var $target = $(ev.target);
			var itemId = $target.closest('button').attr('id');
			//window.alert("Button   "+itemId);

			if(itemId==='button-favorites'){
				document.getElementById('menu-favorites').classList.toggle('open');
			}


			ev.preventDefault();
		},
		_onClickMenuItem: function(ev) {
			var $target = $(ev.target);
			var itemId = $target.closest('input').attr('id');

			//window.alert("input   "+itemId);
			if(itemId==='enableQuickAccess'){
				//$( this.QuickAccessKey ).toggle();
				$( "#quickaccess-list" ).toggle();

				var qa = $(this.QuickAccessKey).is(":visible");
				var url="/apps/files/api/v1/hidequickaccess";
				if(qa){
					url="/apps/files/api/v1/showquickaccess";
				}

				$.get(OC.generateUrl(url),function(data, status){
				});

			}
			ev.preventDefault();
		}

	};

	OCA.Files.Navigation = Navigation;

})();
