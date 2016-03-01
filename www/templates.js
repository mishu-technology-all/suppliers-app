angular.module("templatesCache", []).run(["$templateCache", function($templateCache) {$templateCache.put("home/home.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <span class=\"navbar-brand\" style=\"word-break: break-all;height: inherit;\">{{userName}}</span>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <br>\n    <br>\n    <br>\n    <div class=\"row home-row\">\n        <button class=\"btn btn-lg btn-primary\" style=\"width: 84%;\" ui-sref=\"purchase-order-list\">\n            <span class=\"glyphicon glyphicon-cloud-download\" aria-hidden=\"true\"></span>&nbsp;&nbsp;接单\n        </button>\n    </div>\n    <br>\n    <div class=\"row home-row\" >\n        <button class=\"btn btn-lg btn-primary\" style=\"width: 84%;\" ui-sref=\"stock-order-list\">\n            <span class=\"glyphicon glyphicon-tasks\" aria-hidden=\"true\"></span>&nbsp;&nbsp;已备货\n        </button>\n    </div>\n    <br>\n    <div class=\"row home-row\" >\n        <button class=\"btn btn-lg btn-primary\" style=\"width: 84%;\" ui-sref=\"history-purchase-list\">\n            <span class=\"glyphicon glyphicon-list\" aria-hidden=\"true\"></span>&nbsp;&nbsp;历史\n        </button>\n    </div>\n    <br>\n    <div class=\"row home-row\" >\n        <button class=\"btn btn-lg btn-primary\" style=\"width: 84%;\" ui-sref=\"profile\">\n            <span class=\"glyphicon glyphicon-user\" aria-hidden=\"true\"></span>&nbsp;&nbsp;我的\n        </button>\n    </div>\n</div>\n\n<div class=\"version\">当前最新版本V1.2</div>");
$templateCache.put("login/login.html","<div class=\"container\">\n    <div class=\"row\">\n        <br>\n        <br>\n        <br>\n        <div class=\"col-md-6 col-md-offset-3\">\n            <div class=\"login-panel panel panel-default panel-lg\">\n                <div class=\"panel-heading\" align=\"center\" style=\"padding: 14px 15px;\">\n                    <h2 class=\"panel-title\" style=\"font-size: 17px;\">\n                        <strong>餐馆无忧（供应商版）</strong>\n                    </h2>\n                </div>\n                <div class=\"panel-body\">\n                    <form role=\"form\" ng-submit=\"login(user)\">\n                        <fieldset>\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"glyphicon glyphicon-user\"></i>\n                                    </span>\n                                    <input class=\"form-control input-lg\" placeholder=\"用户名\" name=\"username\" ng-model=\"user.username\" type=\"text\" autofocus autocomplete>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"glyphicon glyphicon-lock\"></i>\n                                    </span>\n                                    <input class=\"form-control input-lg\" placeholder=\"密码\" name=\"password\" ng-model=\"user.password\" type=\"password\" autocomplete>\n                                </div>\n                            </div>\n\n                            <button type=\"submit\" class=\"btn btn-lg btn-primary btn-block\" ng-disabled=\"isLoginState\">\n                                <span ng-if=\"!isLoginState\">登&nbsp;&nbsp;录</span>\n                                <span ng-if=\"isLoginState\">正在登录...</span>\n                            </button>\n                            <button type=\"button\" class=\"btn btn-lg btn-default btn-block\" ng-click=\"reset()\" style=\"border-color: #286090;margin-top: 10px;\">重&nbsp;&nbsp;置</button>\n                        </fieldset>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>");
$templateCache.put("history-purchase-list/history-purchase-list.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"btn btn-default navbar-btn back-btn\" ui-sref=\"home\" style=\"padding: 6px 8px;\">\n                <span class=\"glyphicon glyphicon-menu-left back-left\" aria-hidden=\"true\"></span>返回\n            </button>\n            <span class=\"navbar-brand\">历史采购单信息</span>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\" id=\"history-page\">\n	<div class=\"row form-row\">\n		<div class=\"col-lg-12\">\n			<form rol=\"form\" class=\"form-inline\">\n				<div class=\"form-group\">\n	                <input type=\"text\" class=\"form-control\" placeholder=\"起始时间\" datepicker-popup=\"{{format}}\" ng-model=\"startDate\" is-open=\"openedStart\" datepicker-options=\"dateOptions\" current-text=\"今日\" clear-text=\"清除\" close-text=\"关闭\" ng-click=\"openStart($event)\" style=\"height: 42px;\"/>\n	            </div>\n	            <div class=\"form-group\">\n	                <input type=\"text\" class=\"form-control\" placeholder=\"结束时间\" datepicker-popup=\"{{format}}\" ng-model=\"endDate\" is-open=\"openedEnd\" datepicker-options=\"dateOptions\" current-text=\"今日\" clear-text=\"清除\" close-text=\"关闭\" ng-click=\"openEnd($event)\" style=\"height: 42px;\"/>\n	            </div>\n	            <div class=\"row\">\n	            	<button type=\"button\" class=\"btn btn-primary btn-lg search-btn\" ng-click=\"resetPageAndSearch()\">\n		            	<span class=\"glyphicon glyphicon-search back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top:3px;\"></span>查询\n		            </button>\n	            </div>\n			</form>\n		</div>\n	</div>\n\n	<div class=\"row\">\n	    <div class=\"col-lg-12 dataTable_wrapper\">\n	     	<table class=\"table table-bordered table-striped\">\n                <thead>\n                    <tr>\n                        <th class=\"text-vertical-center\">产品名称</th>\n                        <th class=\"text-vertical-center\" style=\"width: 16%;\">需求数量</th>\n                        <th class=\"text-vertical-center\" style=\"width: 16%;\">实际数量</th>\n                        <th class=\"text-vertical-center\">总金额</th>\n                    </tr>\n                </thead>\n             	<tbody>\n             		<tr ng-repeat=\"historyPurchaseList in historyPurchaseLists\" ng-if=\"historyPurchaseLists.length > 0\">\n                        <td>{{historyPurchaseList.name}}</td>\n                        <td class=\"text-vertical-center\">\n                            <span ng-if=\"historyPurchaseList.needBundleQuantity !== 0\">{{historyPurchaseList.needBundleQuantity}}{{historyPurchaseList.bundleUnit}}</span>\n                            <span ng-if=\"historyPurchaseList.needSingleQuantity !== 0\">{{historyPurchaseList.needSingleQuantity}}{{historyPurchaseList.singleUnit}}</span>\n                        </td>\n                        <td class=\"text-vertical-center\">\n                            <span ng-if=\"historyPurchaseList.purchaseBundleQuantity !== 0\">{{historyPurchaseList.purchaseBundleQuantity}}{{historyPurchaseList.bundleUnit}}</span>\n                            <span ng-if=\"historyPurchaseList.purchaseSingleQuantity !== 0\">{{historyPurchaseList.purchaseSingleQuantity}}{{historyPurchaseList.singleUnit}}</span>\n                        </td>\n                        <td class=\"text-vertical-center\">{{historyPurchaseList.total | currency:\"￥\"}}</td>\n                    </tr>\n             	</tbody>\n            </table>\n	    </div>\n	</div>\n\n	<div class=\"row\" align=\"center\" ng-if=\"historyPurchaseLists.length > 0\">\n        <div calss=\"col-lg-12\">\n            <pagination total-items=\"page.totalItems\" ng-model=\"page.currentPage\" items-per-page=\"page.itemsPerPage\" max-size=\"3\" class=\"pagination\" boundary-links=\"true\" ng-change=\"pageChanged()\" first-text=\"首页\" last-text=\"尾页\" previous-text=\"上一页\" next-text=\"下一页\"></pagination>\n        </div>\n    </div>\n\n    <div class=\"row\" ng-if=\"historyPurchaseLists.length === 0\">\n        <p class=\"no-order-tip\" style=\"margin-top: 30%;\">\n            <span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\" style=\"top: 2px; padding-right: 5px;\"></span>暂无历史采购单信息\n        </p>\n    </div>\n\n    <div class=\"spinner-page\" ng-if=\"showLoading === true\">\n        <div class=\"spinner-container container1\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container2\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container3\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n\n        <p>加载中...</p>\n    </div>\n</div>\n\n<!-- <div class=\"back-top-box\">\n	<span class=\"glyphicon glyphicon-arrow-up\" aria-hidden=\"true\" style=\"top: 6px;left: -1px;\">\n</div> -->");
$templateCache.put("profile/profile.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"btn btn-default navbar-btn back-btn\" ui-sref=\"home\" style=\"padding: 6px 8px;\">\n                <span class=\"glyphicon glyphicon-menu-left back-left\" aria-hidden=\"true\"></span>返回\n            </button>\n            <span class=\"navbar-brand\">我的</span>\n            <button class=\"btn btn-default navbar-btn refresh-btn\" ng-click=\"logout()\">\n                <span class=\"glyphicon glyphicon-log-out\" aria-hidden=\"true\"></span>&nbsp;退出登录\n            </button>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-lg-12\" style=\"margin-top: -10px;\">\n            <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\" id=\"tabs\" data-tabs=\"tabs\">\n                <li role=\"presentation\" class=\"active\">\n                    <a href=\"#feedback\" aria-controls=\"feedback\" role=\"tab\" data-toggle=\"tab\">意见反馈</a>\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"#modify-password\" aria-controls=\"modify-password\" role=\"tab\" data-toggle=\"tab\">修改密码</a>\n                </li>\n                <li role=\"presentation\">\n                    <a href=\"#version-description\" aria-controls=\"version-description\" role=\"tab\" data-toggle=\"tab\">版本说明</a>\n                </li>\n            </ul>\n\n            <div class=\"tab-content\">  \n                <div role=\"tabpanel\" class=\"tab-pane fade in active\" id=\"feedback\">\n                    <div class=\"form-group feedback-textarea\">\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"请输入您的反馈意见\" ng-model=\"form.content\"></textarea>\n                    </div>\n                    <div class=\"add-img-pic\">\n                        <img src=\"img/fankui.png\" ng-src=\"{{lastPhoto}}\" ng-click=\"addPicture()\">\n                    </div>\n                    <div class=\"feedback-img-tip\" ng-if=\"!lastPhoto\">添加您需要反馈的产品图片</div>\n                    <div class=\"row feedback-commit-btn\">\n                        <button type=\"button\" class=\"btn btn-lg btn-primary\" style=\"width: 89%;\" ng-click=\"upload(lastPhoto)\" ng-disabled=\"isCommitState\">\n                            <span class=\"glyphicon glyphicon-ok-circle back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top: 3px;\"></span>提交反馈\n                        </button>\n                    </div>\n                </div> \n\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"modify-password\">  \n                    <form rol=\"form\" name=\"updatePasswordForm\">\n                        <div class=\"form-group\" ng-class=\"{\'has-error\':updatePasswordForm.oldPassword.$invalid && !updatePasswordForm.oldPassword.$pristine}\">\n                            <label><font color=\"red\">*</font>原密码：</label>\n                            <input type=\"password\" class=\"form-control input-lg\" placeholder=\"原密码\" ng-model=\"oldPassword\" name=\"oldPassword\" required>\n                            <p ng-show=\"updatePasswordForm.oldPassword.$invalid && !updatePasswordForm.oldPassword.$pristine\" class=\"help-block\">请输入原密码</p>\n                        </div>\n                        <div class=\"form-group\" ng-class=\"{\'has-error\':updatePasswordForm.newPassword.$invalid && !updatePasswordForm.newPassword.$pristine}\">\n                            <label><font color=\"red\">*</font>新密码：</label>\n                            <input type=\"password\" class=\"form-control input-lg\" placeholder=\"新密码\" ng-model=\"newPassword\" name=\"newPassword\" required> \n                            <p ng-show=\"updatePasswordForm.newPassword.$invalid && !updatePasswordForm.newPassword.$pristine\" class=\"help-block\">请输入新密码</p>\n                        </div>\n                        <div class=\"form-group\" ng-class=\"{\'has-error\':updatePasswordForm.repeatNewPassword.$invalid && !updatePasswordForm.repeatNewPassword.$pristine}\">\n                            <label><font color=\"red\">*</font>确认新密码：</label>\n                            <input type=\"password\" class=\"form-control input-lg\" placeholder=\"确认新密码\" ng-model=\"repeatNewPassword\" name=\"repeatNewPassword\" required> \n                            <p ng-show=\"updatePasswordForm.repeatNewPassword.$invalid && !updatePasswordForm.repeatNewPassword.$pristine\" class=\"help-block\">请再次输入新密码</p>\n                        </div>\n                        <div class=\"row feedback-commit-btn\">\n                            <button type=\"button\" class=\"btn btn-lg btn-primary\" style=\"width: 90%;\" ng-disabled=\"updatePasswordForm.$invalid\" ng-click=\"updatePassword()\">\n                                <span class=\"glyphicon glyphicon-ok-circle back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top: 3px;\"></span>提交修改\n                            </button>\n                        </div>\n                        <div class=\"row feedback-commit-btn\">\n                            <button type=\"button\" class=\"btn btn-lg btn-default\" ng-click=\"reset()\" style=\"width: 90%;border-color: #286090;\">\n                                <span class=\"glyphicon glyphicon-remove-circle back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top: 3px;\"></span>重置\n                            </button>\n                        </div>\n                    </form>\n                </div>\n\n                <div role=\"tabpanel\" class=\"tab-pane fade\" id=\"version-description\">  \n                    <div class=\"bs-callout bs-callout-info\">\n                        <h5>版本V1.0功能简介</h5>\n                        <ol style=\"margin-bottom: 6px;margin-left: -4px;\">\n                            <li>接单列表，提交备货</li>\n                            <li>历史采购单查询</li>\n                            <li>反馈、修改密码、版本更新说明</li>\n                        </ol>\n                    </div>\n\n                    <div class=\"bs-callout bs-callout-info\">\n                        <h5>版本V1.1新增功能简介</h5>\n                        <ol style=\"margin-bottom: 6px;margin-left: -4px;\">\n                            <li>采购列表按仓库查询</li>\n                            <li>已备货列表按仓库查询</li>\n                        </ol>\n                    </div>\n\n                    <div class=\"bs-callout bs-callout-info\">\n                        <h5>版本V1.2新增功能简介</h5>\n                        <ol style=\"margin-bottom: 6px;margin-left: -4px;\">\n                            <li>新增动态更新APP功能</li>\n                            <li>添加首页加载动画</li>\n                        </ol>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>    \n</div>\n\n<div class=\"action-sheet-backdrop\">\n    <div class=\"action-sheet-wrapper\" ng-class=\"{\'action-sheet-up\': showDrop}\">\n        <div class=\"action-sheet\">\n            <div class=\"action-sheet-group\">\n                <button class=\"button action-sheet-option\" ng-click=\"buttonClicked(0)\">从手机相册选择</button>\n                <button class=\"button action-sheet-option\" ng-click=\"buttonClicked(1)\" style=\"border-top: 1px solid #c8c8c8;\">拍照</button>\n            </div>\n\n            <div class=\"action-sheet-group\">\n                <button class=\"button\" ng-click=\"hideBackdrop()\">\n                    <span class=\"glyphicon glyphicon-remove back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top: 3px;\"></span>取消\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n\n<script type=\"text/javascript\">\n    jQuery(document).ready(function ($) {\n        $(\'#tabs a\').click(function (e) { \n            e.preventDefault()\n            $(this).tab(\'show\')\n        });\n    });\n</script>");
$templateCache.put("purchase-order-list/purchase-order-list.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"btn btn-default navbar-btn back-btn\" ui-sref=\"home\" style=\"padding: 6px 8px;\">\n                <span class=\"glyphicon glyphicon-menu-left back-left\" aria-hidden=\"true\"></span>返回\n            </button>\n            <span class=\"navbar-brand\">采购单信息</span>\n            <button type=\"button\" class=\"btn btn-default navbar-btn refresh-btn\" style=\"padding: 6px 7px;\" ng-click=\"loadPurchaseOrders()\">\n                <span class=\"glyphicon glyphicon-refresh back-left\" aria-hidden=\"true\"></span>&nbsp;刷新\n            </button>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n	<div class=\"row\">\n        <div class=\"row\" style=\"margin: -5px 2px 14px;\">\n            <select class=\"form-control\" ng-model=\"searchForm.depotId\" ng-options=\"vendorDepot.id as vendorDepot.name for vendorDepot in vendorDepots\" style=\"height: 42px;font-size: 16px;\" ng-change=\"loadPurchaseOrders()\">\n                <option value=\"\">全部（仅供查看）</option>\n            </select>\n        </div>\n\n	    <div class=\"col-lg-12 dataTable_wrapper\">\n	     	<div class=\"panel panel-default\">\n	     		<div class=\"panel-heading\">\n                    <strong>采购单列表</strong>\n                    <span>今日需备货：{{purchaseOrders.length ? purchaseOrders.length : 0}}</span>\n                </div>\n                <table class=\"table table-bordered table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-vertical-center\">\n                                <input type=\"checkbox\" ng-click=\"checkAll()\">\n                            </th>\n                            <th class=\"text-vertical-center\">产品名称</th>\n                            <th class=\"text-vertical-center\">需求数量（单位）</th>\n                        </tr>\n                    </thead>\n                 	<tbody>\n                 		<tr ng-repeat=\"purchaseOrder in purchaseOrders\">\n                            <td class=\"text-vertical-center\">\n                                <input type=\"checkbox\" checklist-model=\"searchForm.checkedItemIds\" checklist-value=\"purchaseOrder.id\">\n                            </td>\n                            <td>{{purchaseOrder.name}}</td>\n                            <td class=\"text-vertical-center\">\n                                <span ng-if=\"purchaseOrder.bundleQuantity !== 0\">{{purchaseOrder.bundleQuantity}}{{purchaseOrder.bundleUnit}}</span>\n                                <span ng-if=\"purchaseOrder.singleQuantity !== 0\">{{purchaseOrder.singleQuantity}}{{purchaseOrder.singleUnit}}</span>\n                            </td>\n                        </tr>\n                 	</tbody>\n                </table>\n	     	</div>\n	    </div>\n	</div>\n    <div class=\"row\" style=\"text-align: center; margin-bottom: 20px;\" ng-if=\"purchaseOrders.length > 0\">\n        <button type=\"button\" class=\"btn btn-lg btn-primary\" style=\"width: 90%;\" ng-click=\"confirmPurchase()\" ng-disabled=\"isCommiting || searchForm.depotId === null\">\n            <span class=\"glyphicon glyphicon-ok-circle back-left\" aria-hidden=\"true\" style=\"margin-right: 6px;top: 3px;\"></span>\n            <span ng-if=\"!isCommiting\">确认备货</span>\n            <span ng-if=\"isCommiting\">正在提交...</span>\n        </button>\n    </div>\n\n    <div class=\"row\" ng-if=\"purchaseOrders.length === 0\">\n        <p class=\"no-order-tip\">\n            <span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\" style=\"top: 2px; padding-right: 5px;\"></span>暂无采购单信息\n        </p>\n    </div>\n\n    <div class=\"spinner-page\" ng-if=\"showLoading === true\" style=\"margin-top: 30%;\">\n        <div class=\"spinner-container container1\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container2\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container3\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n\n        <p>加载中...</p>\n    </div>\n</div>");
$templateCache.put("stock-order-list/stock-order-list.html","<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"btn btn-default navbar-btn back-btn\" ui-sref=\"home\" style=\"padding: 6px 8px;\">\n                <span class=\"glyphicon glyphicon-menu-left back-left\" aria-hidden=\"true\"></span>返回\n            </button>\n            <span class=\"navbar-brand\">已备货信息</span>\n        </div>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n	<div class=\"row\">\n        <div class=\"row\" style=\"margin: -5px 2px 14px;\">\n            <select class=\"form-control\" ng-model=\"searchForm.depotId\" ng-options=\"vendorDepot.id as vendorDepot.name for vendorDepot in vendorDepots\" style=\"height: 42px;font-size: 16px;\" ng-change=\"loadStockOrders()\">\n                <option value=\"\">全部</option>\n            </select>\n        </div>\n\n	    <div class=\"col-lg-12 dataTable_wrapper\">\n            <div class=\"panel panel-default\">\n                <div class=\"panel-heading\">\n                    <strong>已备货列表</strong>\n                    <span>今日已备货：{{purchaseOrders.length ? purchaseOrders.length : 0}}</span>\n                </div>\n    	     	<table class=\"table table-bordered table-striped\">\n                    <thead>\n                        <tr>\n                            <th class=\"text-vertical-center\">产品名称</th>\n                            <th class=\"text-vertical-center\">供应数量（单位）</th>\n                        </tr>\n                    </thead>\n                 	<tbody>\n                 		<tr ng-repeat=\"purchaseOrder in purchaseOrders\">\n                            <td>{{purchaseOrder.name}}</td>\n                            <td class=\"text-vertical-center\">\n                                <span ng-if=\"purchaseOrder.bundleQuantity !== 0\">{{purchaseOrder.bundleQuantity}}{{purchaseOrder.bundleUnit}}</span>\n                                <span ng-if=\"purchaseOrder.singleQuantity !== 0\">{{purchaseOrder.singleQuantity}}{{purchaseOrder.singleUnit}}</span>\n                            </td>\n                        </tr>\n                 	</tbody>\n                </table>\n            </div>\n	    </div>\n	</div>\n\n    <div class=\"row\" ng-if=\"purchaseOrders.length === 0\">\n        <p class=\"no-order-tip\">\n            <span class=\"glyphicon glyphicon-alert\" aria-hidden=\"true\" style=\"top: 2px; padding-right: 5px;\"></span>暂无已备货信息\n        </p>\n    </div>\n\n    <div class=\"spinner-page\" ng-if=\"showLoading === true\" style=\"margin-top: 30%;\">\n        <div class=\"spinner-container container1\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container2\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n        <div class=\"spinner-container container3\">\n            <div class=\"circle1\"></div>\n            <div class=\"circle2\"></div>\n            <div class=\"circle3\"></div>\n            <div class=\"circle4\"></div>\n        </div>\n\n        <p>加载中...</p>\n    </div>\n</div>\n");}]);