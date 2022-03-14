!function(){"use strict";var e,n={39583:function(e,n,i){var s=i(19755),a=i.n(s),r=void i(41704);window.addEventListener("DOMContentLoaded",(function(){a()("#excludedGroups,#linksExcludedGroups").each((function(e,t){OC.Settings.setupGroupsSelect(a()(t)),a()(t).change((function(e){var t=e.val||[];t=JSON.stringify(t),OCP.AppConfig.setValue("core",a()(r).attr("name"),t)}))})),a()("#loglevel").change((function(){a().post(OC.generateUrl("/settings/admin/log/level"),{level:a()(r).val()},(function(){OC.Log.reload()}))})),a()("#backgroundjobs span.crondate").tooltip({placement:"top"}),a()("#backgroundjobs input").change((function(){if(a()(r).is(":checked")){var e=a()(r).val();"ajax"!==e&&"webcron"!==e&&"cron"!==e||OCP.AppConfig.setValue("core","backgroundjobs_mode",e,{success:function(){OCP.AppConfig.deleteKey("core","cronErrors")}})}})),a()("#shareAPIEnabled").change((function(){a()("#shareAPI p:not(#enable)").toggleClass("hidden",!r.checked)})),a()("#enableEncryption").change((function(){a()("#encryptionAPI div#EncryptionWarning").toggleClass("hidden")})),a()("#reallyEnableEncryption").click((function(){a()("#encryptionAPI div#EncryptionWarning").toggleClass("hidden"),a()("#encryptionAPI div#EncryptionSettingsArea").toggleClass("hidden"),OCP.AppConfig.setValue("core","encryption_enabled","yes"),a()("#enableEncryption").attr("disabled","disabled")})),a()("#startmigration").click((function(e){a()(window).on("beforeunload.encryption",(function(e){return t("settings","Migration in progress. Please wait until the migration is finished")})),e.preventDefault(),a()("#startmigration").prop("disabled",!0),OC.msg.startAction("#startmigration_msg",t("settings","Migration started …")),a().post(OC.generateUrl("/settings/admin/startmigration"),"",(function(e){OC.msg.finishedAction("#startmigration_msg",e),"success"===e.status?(a()("#encryptionAPI div#selectEncryptionModules").toggleClass("hidden"),a()("#encryptionAPI div#migrationWarning").toggleClass("hidden")):a()("#startmigration").prop("disabled",!1),a()(window).off("beforeunload.encryption")}))})),a()("#shareapiExpireAfterNDays").on("input",(function(){this.value=this.value.replace(/\D/g,"")})),a()("#shareAPI input:not(.noJSAutoUpdate)").change((function(){var e=a()(this).val();"checkbox"===a()(this).attr("type")&&(e=this.checked?"yes":"no"),OCP.AppConfig.setValue("core",a()(this).attr("name"),e)})),a()("#shareapiDefaultExpireDate").change((function(){a()("setDefaultExpireDate").toggleClass("hidden",!this.checked)})),a()("#shareapiDefaultInternalExpireDate").change((function(){a()("#setDefaultInternalExpireDate").toggleClass("hidden",!this.checked)})),a()("#shareapiDefaultRemoteExpireDate").change((function(){a()("#setDefaultRemoteExpireDate").toggleClass("hidden",!this.checked)})),a()("#publicShareDisclaimer").change((function(){a()("#publicShareDisclaimerText").toggleClass("hidden",!this.checked),this.checked||e("")})),a()("#shareApiDefaultPermissionsSection input").change((function(e){var t=a()("#shareApiDefaultPermissions"),n=a()(e.target),i=t.val();return n.is(":checked")?i|=n.val():i&=~n.val(),i|=OC.PERMISSION_READ,t.val(i).change(),e.preventDefault(),!1}));var e=_.debounce((function(e){var n={success:function(){OC.msg.finishedSuccess("#publicShareDisclaimerStatus",t("settings","Saved"))},error:function(){OC.msg.finishedError("#publicShareDisclaimerStatus",t("settings","Not saved"))}};OC.msg.startSaving("#publicShareDisclaimerStatus"),_.isString(e)&&""!==e?OCP.AppConfig.setValue("core","shareapi_public_link_disclaimertext",e,n):(a()("#publicShareDisclaimerText").val(""),OCP.AppConfig.deleteKey("core","shareapi_public_link_disclaimertext",n))}),500);a()("#publicShareDisclaimerText").on("change, keyup",(function(){e(this.value)})),a()("#shareapi_allow_share_dialog_user_enumeration").on("change",(function(){a()("#shareapi_restrict_user_enumeration_to_group_setting").toggleClass("hidden",!this.checked),a()("#shareapi_restrict_user_enumeration_to_phone_setting").toggleClass("hidden",!this.checked),a()("#shareapi_restrict_user_enumeration_combinewarning_setting").toggleClass("hidden",!this.checked)})),a()("#allowLinks").change((function(){a()("#publicLinkSettings").toggleClass("hidden",!this.checked),a()("#setDefaultExpireDate").toggleClass("hidden",!(this.checked&&a()("#shareapiDefaultExpireDate")[0].checked))})),a()("#mail_smtpauth").change((function(){this.checked?a()("#mail_credentials").removeClass("hidden"):a()("#mail_credentials").addClass("hidden")})),a()("#mail_smtpmode").change((function(){"smtp"!==a()(this).val()?(a()("#setting_smtpauth").addClass("hidden"),a()("#setting_smtphost").addClass("hidden"),a()("#mail_smtpsecure_label").addClass("hidden"),a()("#mail_smtpsecure").addClass("hidden"),a()("#mail_credentials").addClass("hidden"),a()("#mail_sendmailmode_label, #mail_sendmailmode").removeClass("hidden")):(a()("#setting_smtpauth").removeClass("hidden"),a()("#setting_smtphost").removeClass("hidden"),a()("#mail_smtpsecure_label").removeClass("hidden"),a()("#mail_smtpsecure").removeClass("hidden"),a()("#mail_smtpauth").is(":checked")&&a()("#mail_credentials").removeClass("hidden"),a()("#mail_sendmailmode_label, #mail_sendmailmode").addClass("hidden"))})),a()("#mail_general_settings_form").change((function e(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(e):(OC.msg.startSaving("#mail_settings_msg"),a().ajax({url:OC.generateUrl("/settings/admin/mailsettings"),type:"POST",data:a()("#mail_general_settings_form").serialize(),success:function(){OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:function(e){OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))})),a()("#mail_credentials_settings_submit").click((function e(){OC.PasswordConfirmation.requiresPasswordConfirmation()?OC.PasswordConfirmation.requirePasswordConfirmation(e):(OC.msg.startSaving("#mail_settings_msg"),a().ajax({url:OC.generateUrl("/settings/admin/mailsettings/credentials"),type:"POST",data:a()("#mail_credentials_settings").serialize(),success:function(){OC.msg.finishedSuccess("#mail_settings_msg",t("settings","Saved"))},error:function(e){OC.msg.finishedError("#mail_settings_msg",e.responseJSON)}}))})),a()("#mail_smtppassword").click((function(){"text"===r.type&&"********"===r.value&&(r.type="password",r.value="")})),a()("#sendtestemail").click((function(e){e.preventDefault(),OC.msg.startAction("#sendtestmail_msg",t("settings","Sending…")),a().ajax({url:OC.generateUrl("/settings/admin/mailtest"),type:"POST",success:function(){OC.msg.finishedSuccess("#sendtestmail_msg",t("settings","Email sent"))},error:function(e){OC.msg.finishedError("#sendtestmail_msg",e.responseJSON)}})})),a()("#allowGroupSharing").change((function(){a()("#allowGroupSharing").toggleClass("hidden",!r.checked)})),a()("#shareapiExcludeGroups").change((function(){a()("#selectExcludedGroups").toggleClass("hidden",!r.checked)})),null!==document.getElementById("security-warning")&&a().when(OC.SetupChecks.checkWebDAV(),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/webfinger",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("GET","/.well-known/nodeinfo",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown"),[200,404],!0),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/caldav",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkWellKnownUrl("PROPFIND","/.well-known/carddav",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocm-provider/",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkProviderUrl(OC.getRootPath()+"/ocs-provider/",OC.theme.docPlaceholderUrl,!0===a()("#postsetupchecks").data("check-wellknown")),OC.SetupChecks.checkSetup(),OC.SetupChecks.checkGeneric(),OC.SetupChecks.checkWOFF2Loading(OC.filePath("core","","fonts/NotoSans-Regular-latin.woff2"),OC.theme.docPlaceholderUrl),OC.SetupChecks.checkDataProtected()).then((function(e,t,n,i,s,r,o,c,l,d,u){var h=[].concat(e,t,n,i,s,r,o,c,l,d,u),g=a()("#postsetupchecks");a()("#security-warning-state-loading").addClass("hidden");for(var p=!1,m=g.find(".errors"),f=g.find(".warnings"),C=g.find(".info"),_=0;_<h.length;_++)switch(h[_].type){case OC.SetupChecks.MESSAGE_TYPE_INFO:C.append("<li>"+h[_].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_WARNING:f.append("<li>"+h[_].msg+"</li>");break;case OC.SetupChecks.MESSAGE_TYPE_ERROR:default:m.append("<li>"+h[_].msg+"</li>")}m.find("li").length>0&&(m.removeClass("hidden"),p=!0),f.find("li").length>0&&(f.removeClass("hidden"),p=!0),C.find("li").length>0&&(C.removeClass("hidden"),p=!0),p?(a()("#postsetupchecks-hint").removeClass("hidden"),m.find("li").length>0?a()("#security-warning-state-failure").removeClass("hidden"):a()("#security-warning-state-warning").removeClass("hidden")):0===a()("#security-warning").children("ul").children().length?a()("#security-warning-state-ok").removeClass("hidden"):a()("#security-warning-state-failure").removeClass("hidden")}))}))}},i={};function s(e){var t=i[e];if(void 0!==t)return t.exports;var a=i[e]={id:e,loaded:!1,exports:{}};return n[e].call(a.exports,a,a.exports,s),a.loaded=!0,a.exports}s.m=n,s.amdD=function(){throw new Error("define cannot be used indirect")},s.amdO={},e=[],s.O=function(t,n,i,a){if(!n){var r=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],a=e[d][2];for(var o=!0,c=0;c<n.length;c++)(!1&a||r>=a)&&Object.keys(s.O).every((function(e){return s.O[e](n[c])}))?n.splice(c--,1):(o=!1,a<r&&(r=a));if(o){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[n,i,a]},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,{a:t}),t},s.d=function(e,t){for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e},s.j=718,function(){s.b=document.baseURI||self.location.href;var e={718:0};s.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,a,r=n[0],o=n[1],c=n[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(i in o)s.o(o,i)&&(s.m[i]=o[i]);if(c)var d=c(s)}for(t&&t(n);l<r.length;l++)a=r[l],s.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return s.O(d)},n=self.webpackChunknextcloud=self.webpackChunknextcloud||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var a=s.O(void 0,[874],(function(){return s(39583)}));a=s.O(a)}();
//# sourceMappingURL=settings-legacy-admin.js.map?v=ffeec1d8591f7ca4e7d7