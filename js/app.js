"use strict";

//Number.prototype.zeroPad = Number.prototype.zeroPad || 
//	function(base){
//		var nr = this, len = (String(base).length - String(nr).length)+1;
//		return len > 0? new Array(len).join('0')+nr : nr;
//	};

function zeroPad(nr,base){
		var  len = (String(base).length - String(nr).length)+1;
		return len > 0? new Array(len).join('0')+nr : nr;
	}

angular.element( document ).ready(function() {
	angular.bootstrap(document, ['docsApp']);
});

 
//md-closed
DocsApp.value("ApiURL", "./api/index.php")

.config(["COMPONENTS", "DEMOS", "PAGES", "$routeProvider", "$mdThemingProvider", function(e, t, n, a, o) {
	
	a
//	.when("/", {
//		templateUrl: "partials/home.tmpl.html"
//	})
//	.when("/layout/:tmpl", {
//		templateUrl: function(e) {
//			return "partials/layout-" + e.tmpl + ".tmpl.html"
//		}
//	}).when("/layout/", {
//		redirectTo: function() {
//			return "/layout/container"
//		}
//	}).when("/demo/", {
//		redirectTo: function() {
//			return t[0].url
//		}
//	})
//	.when("/api/", {
//		redirectTo: function() {
//			return e[0].docs[0].url
//		}
//	})
	.when("/camdata", {
		controller:'CamdataCtrl',
		templateUrl: "partials/camdata.tpl.html"
	})
	.when("/poctyvozidiel", {
		controller:'SpacedataCtrl',
		templateUrl: "partials/spacedata.tpl.html"
	})
	.when("/statistika", {
		controller:'CampstatCtrl',
		templateUrl: "partials/campstat.tpl.html"
	})
	.when("/ratingplochy", {
		controller:'ArealetterCtrl',
		templateUrl: "partials/areafiles.tpl.html"
	})
	.when("/kampane", {
		controller:'CampaignsCtrl',
		templateUrl: "partials/campaigns.tpl.html"
	})
	.when("/kampane/plochy", {
		controller:'CampareasCtrl',
		templateUrl: "partials/campareas.tpl.html"
	})
	.when("/pouzivatelia", {
		controller:'CfgusersCtrl',
		templateUrl: "partials/cfgusers.tpl.html"
	})
	.when("/plochy", {
		controller:'AreaCtrl',
		templateUrl: "partials/area.tpl.html"
	})
	.when("/kamery", {
		controller:'ArecamCtrl',
		templateUrl: "partials/arecam.tpl.html"
	})
	.when("/zakaznici", {
		controller:'CustomersCtrl',
		templateUrl: "partials/customers.tpl.html"
	})
	.when("/ftppristup", {
		controller:'CfgftpCtrl',
		templateUrl: "partials/cfgftp.tpl.html"
	})
	.when("/cfgevlp", {
		controller:'CfgevlpCtrl',
		templateUrl: "partials/cfgevlp.tpl.html"
	})
	.when("/cfgcoef", {
		controller:'CfgcoefCtrl',
		templateUrl: "partials/cfgcoef.tpl.html"
	})
	.when("/cfgemail", {
		controller:'CfgemailCtrl',
		templateUrl: "partials/cfgemail.tpl.html"
	})
	.when("/getting-started", {
		templateUrl: "partials/getting-started.tmpl.html"
	}), o.theme("docs-dark", "default").primaryPalette("yellow").dark(), angular.forEach(n, function(e) {
		angular.forEach(e, function(e) {
			a.when(e.url, {
				templateUrl: e.outputPath,
				controller: "GuideCtrl"
			})
		})
	}), angular.forEach(e, function(e) {
		angular.forEach(e.docs, function(t) {
			t.url = "/" + t.url, a.when(t.url, {
				templateUrl: t.outputPath,
				resolve: {
					component: function() {
						return e
					},
					doc: function() {
						return t
					}
				},
				controller: "ComponentDocCtrl"
			})
		})
	}), angular.forEach(t, function(t) {
		var n;
		angular.forEach(e, function(e) {
			t.name === e.name && (n = e)
		}), n = n || angular.extend({}, t), a.when(t.url, {
			templateUrl: "partials/demo.tmpl.html",
			controller: "DemoCtrl",
			resolve: {
				component: function() {
					return n
				},
				demos: function() {
					return t.demos
				}
			}
		})
	}), a.otherwise("/kampane");
}])

.factory("CurrentYM", [function() {
	return {
		initTabs: function(scope) {			
			var monTabs=[
				{ title: 'Jan', idx: "01"},
				{ title: 'Feb', idx: "02"},
				{ title: 'Mar', idx: "03"},
				{ title: 'Apr', idx: "04"},
				{ title: 'Maj', idx: "05"},
				{ title: 'Jun', idx: "06"},
				{ title: 'Júl', idx: "07"},
				{ title: 'Aug', idx: "08"},
				{ title: 'Sep', idx: "09"},
				{ title: 'Okt', idx: "10"},
				{ title: 'Nov', idx: "11"},
				{ title: 'Dec', idx: "12"}
			];
			var currentTime = new Date()

			scope.appYears=[currentTime.getFullYear()+1,currentTime.getFullYear(),currentTime.getFullYear()-1];
			scope.tabs = monTabs;

			if ( scope.$parent.$root.currentYM){
				scope.selY = scope.$parent.$root.currentYM.currentY;
				scope.selM = scope.$parent.$root.currentYM.currentM;
			} else {
				scope.selY = currentTime.getFullYear();
				scope.selM = currentTime.getMonth();
			}

		},
		saveYM: function(scope,py,pm) {
			scope.$parent.$root.currentYM={
				currentY: py,
				currentM: pm
			}
		}
	}
}])

.factory("AppData", ["$http", "$q", "$mdDialog", "$timeout", "ApiURL", function($http, $q, $mdDialog, $timeout, ApiURL) {
	return {
		request: function(m, p, d) {
			var deferred = $q.defer();
			var par={responseType: 'json', method: m, url: ApiURL+'/'+p};
			if (d) par.data=d;
			$http(par).success(function(result) {
				deferred.resolve(result);
			}).error(function(){
				deferred.reject();
			});
			return deferred.promise;
		},
		clearInputData: function(data){
			if ( data ){
				if (typeof data.isArray !== "undefined") {
					for (var i = 0; i < data.length; i++) {
						if ("_expanded" in data[i]) {
							delete data[i]["_expanded"];
						}
					}
				}
			}
			return data;
		},
		clearOutputData: function(data){
			if (data && angular.isArray(data) && data[0]===false){
				data.splice(0, 1);
			}
			return data;
		},
		PreList: function (inparams) {
			inparams.scope.processData=true;
			inparams.scope.expandedNew=false;
			inparams.scope.rowdata={};
			inparams.scope.rowid=null;
			inparams.scope.search="";
			inparams.scope.openDetail = function(item) {
				if ( item ){
					if (inparams.scope.expandedNew)
						inparams.scope.expandedNew=false;
					inparams.scope.rowdata={};
					inparams.scope.rowid=null;
					if ( inparams.scope.items ) {
						for (var i = 0; i < inparams.scope.items.length; i++) {
							if ( item!==inparams.scope.items[i] ){
								inparams.scope.items[i]._expanded=false;
							} else {
								inparams.scope.rowdata=inparams.scope.items[i];
								inparams.scope.rowid=inparams.scope.items[i].id;
								if (!item._expanded)
									item._expanded=true;
							}
						}
					}
				} else {
					inparams.scope.rowdata={};
					inparams.scope.rowid=null;
					if ( inparams.scope.items ) {
						for (var i = 0; i < inparams.scope.items.length; i++) {
							if (inparams.scope.items[i]._expanded)
								inparams.scope.items[i]._expanded=false;							
						}
					}
					if (!inparams.scope.expandedNew)
						inparams.scope.expandedNew=true;
				}
			};
			inparams.scope.closeDetail = function(item) {
				if ( item ){
					if ( inparams.scope.items ) {
						for (var i = 0; i < inparams.scope.items.length; i++) {
							inparams.scope.items[i]._expanded=false;
						}
					}
				} else {
					inparams.scope.expandedNew=false;
				}
			};
			//if (!inparams.scope.$$phase) {
			//	inparams.scope.$apply();
			//} 
		},
		PosList: function (inparams,data) {
			inparams.scope.processData=true;
			data=this.clearOutputData(data);
			if ( data ) {
				for (var i = 0; i < data.length; i++) {
					var newField='_expanded';
					data[i][newField]=false;
				}
			}
			inparams.scope.items=data;
			inparams.scope.processData=false;
		},
		Update: function (inparams) {			
			inparams.scope.destroy = function(ev) {
				var confirm = $mdDialog.confirm()
					.title('Vymazať položku')
					.content('Chcete vymazať túto položku?')
					.ariaLabel('Vymazať položku')
					.ok('Áno')
					.cancel('Nie')
					.targetEvent(ev);
					$mdDialog.show(confirm).then(function() {
						inparams.me.delItem(inparams.name,inparams.scope.rowdata).then(function(data) {
							data=inparams.me.clearOutputData(data);
							inparams.scope.rowdata={};
							inparams.scope.rowid=null;
							inparams.scope.items=data;
							if ( data )
								for (var i = 0; i < data.length; i++) {
									var newField='_expanded';
									data[i][newField]=false;
								}
							inparams.scope.expandedNew=false;
						});
					}, function() {
						
					});				
			};
			inparams.scope.save = function() {
				inparams.scope.processData=true;
				if (inparams.scope.rowid==undefined) {
					inparams.me.newItem(inparams.name,inparams.scope.rowdata).then(function(data) {
						data=inparams.me.clearOutputData(data);
						if ( data ) {
							for (var i = 0; i < data.length; i++) {
								var newField='_expanded';
								data[i][newField]=false;								
							}
							
						}

						inparams.scope.items=data;
						inparams.scope.expandedNew=false;
					});
				} else {
					inparams.me.updItem(inparams.name,inparams.scope.rowdata).then(function(data) {
						data=inparams.me.clearOutputData(data);
						if ( data )
						for (var i = 0; i < data.length; i++) {
							var newField='_expanded';
							data[i][newField]=false;
						}

						inparams.scope.items=data;
						inparams.scope.expandedNew=false;
					});
				}
				inparams.scope.processData=false;
			};
		}			

	}
}])
.factory("DbData", ["AppData", "$mdDialog" , function(apd,$mdDialog) {
	return {
		clearOutputData: function(data){
			return apd.clearOutputData(data);
		},
		getItems: function(name) { 
			return apd.request('GET', name);
		},
		newItem: function(name,data) { 
			return apd.request('POST', name, apd.clearInputData(data));
		},
		delItem: function(name,data) { 
			return apd.request('DELETE', name, data);
		},
		updItem: function(name,data) { 
			return apd.request('PUT', name, apd.clearInputData(data));
		},
		setValues: function(name,data) { 
			return apd.request('PUT', name, data);
		},
		PreList: function (inparams) {
			inparams.scope.processData=true;
			inparams.scope.expandedNew=false;
			inparams.scope.rowdata={};
			inparams.scope.rowid=null;
			inparams.scope.search="";

			if (inparams.scope.expandedNew)
				inparams.scope.expandedNew=false;
			if ( inparams.scope.items ) {
				for (var i = 0; i < inparams.scope.items.length; i++) {
					inparams.scope.rowdata=inparams.scope.items[i];
					inparams.scope.rowid=inparams.scope.items[i].id;
					inparams.scope.items[i]._expanded=false;
				}
			}
		},
		List: function (inparams) {
			apd.PreList(inparams);
			this.getItems(inparams.name).then(function (data) {
				apd.PosList(inparams,data);
			});
		},
		PosList: function (inparams,data) {
			apd.PosList(inparams,data);
		},
		Update: function (inparams) {
			apd.Update(inparams);
		},
		Dict: function (inparams) {
			this.getDataItems(inparams.name,inparams.field).then(function (data) {
				inparams.scope[inparams.dict]=data;
			});	
		}
	}
}])
.factory("ConfigData", ["AppData","$mdDialog", function(apd,$mdDialog) {
	return {
		clearOutputData: function(data){
			return apd.clearOutputData(data);
		},
		getItems: function(name) { 
			return apd.request('GET', "config?_Data_="+name);
		},
		getDataItems: function(name,data) { 
			return apd.request('GET', "config?_Data_="+name+'&_Field_='+data);
		},
		newItem: function(name,data) { 
			return apd.request('POST', "config?_Data_="+name, apd.clearInputData(data));
		},
		delItem: function(name,data) { 
			return apd.request('DELETE', "config?_Data_="+name, data);
		},
		updItem: function(name,data) { 
			return apd.request('PUT', "config?_Data_="+name, apd.clearInputData(data));
		},
		setValues: function(name,data) { 
			return apd.request('PUT', "config?_Values_="+name, data);
		},
		List: function (inparams) {
			apd.PreList(inparams);
			this.getItems(inparams.name).then(function (data) {
				data=apd.clearOutputData(data);
				if ( data ) {
					for (var i = 0; i < data.length; i++) {
						var newField='_expanded';
						data[i][newField]=false;
					}
				}
				inparams.scope.items=data;
			});
		},
		PosList: function (inparams,data) {
			apd.PosList(inparams,data);
		},
		Update: function (inparams) {
			apd.Update(inparams);
		},
		Dict: function (inparams) {
			this.getDataItems(inparams.name,inparams.field).then(function (data) {
				inparams.scope[inparams.dict]=data;
			});	
		},
		Values: function (inparams) {
			this.getItems(inparams.name).then(function (data) {
				inparams.scope.items=data;
			});
			
			inparams.scope.save = function(ev) {
				inparams.me.setValues(inparams.name,apd.clearOutputData(inparams.scope.items)).then(function(data) {
					$mdDialog.show(
							$mdDialog.alert()
							.title('Uloženie údajov')
							.content(inparams.message)
							.ariaLabel('Uloženie údajov')
							.ok('Zatvoriť')
							.targetEvent(ev)
					);		
				});
			};
		}
	}
}])

.factory("menu", ["COMPONENTS", "DEMOS", "PAGES", "$location", "$rootScope", function(e, t, n, a, o) {
	function r(e, t) {
		return e.name < t.name ? -1 : 1
	}

	function i() {
		var e = a.path(),
		t = function(t, n) {
			e === n.url && (m.selectSection(t), m.selectPage(t, n))
		};
		l.forEach(function(e) {
			e.children ? e.children.forEach(function(e) {
				e.pages && e.pages.forEach(function(n) {
					t(e, n)
				})
			}) : e.pages ? e.pages.forEach(function(n) {
				t(e, n)
			}) : "link" === e.type && t(e, e)
		})
	}
	var l = [{
			name: "Zákazníci",
			url: "/zakaznici",
			type: "link"
		},
		{
				name: "Kampane",
				url: "/",
				type: "toggle",
				pages: [
				    {
						name: "Základné údaje",
						url: "/kampane",
						type: "link"
					}, {
						name: "Štatistika kampane",
						url: "/statistika",
						type: "link"
					}]
		},
		{
			name: "Reklamné plochy",
			url: "/",
			type: "toggle",
			pages: [
			    {
					name: "Plochy",
					url: "/plochy",
					type: "link"
				}, {
					name: "Plochy/kamery",
					url: "/kamery",
					type: "link"
				}, {
					name: "Počty vozidiel",
					url: "/poctyvozidiel",
					type: "link"
			    },{
					name: "Rating plochy",
					url: "/ratingplochy",
					type: "link"
				}]
		 },
		{
			name: "Údaje z kamier",
			url: "/camdata",
			type: "link"
		},
		{
			name: "Nastavenia",
			url: "/",
			type: "toggle",
			pages: [
			    {
					name: "Používatelia",
					url: "/pouzivatelia",
					type: "link"
//				}, {
//					name: "Evid.list plochy",
//					url: "/cfgevlp",
//					type: "link"
				}, {
					name: "Koeficienty",
					url: "/cfgcoef",
					type: "link"
				}, {					
					name: "E-mail",
					url: "/cfgemail",
					type: "link"
				}, {					
					name: "Ftp prístup",
					url: "/ftppristup",
					type: "link"
				}]
		 }
	         
	         /*
	     	 l.push(), l.push({ 
	     		 name: "Nastavenia", 
	     		 type: "heading", 
	     		 children: [{ 
	     			 name: "Nastavenia", 
	     			 type: "toggle", 
	     			 pages: [{ 
	     				 name: "Introduction and Terms", 
	     				 url: "/Theming/01_introduction", 
	     				 type: "link" 
	     			 }, { 
	 					name: "Declarative Syntax",
	 					url: "/Theming/02_declarative_syntax", 
	 					type: "link" 
	 				}, { 
	 					name: "Configuring a Theme", 
	 					url: "/Theming/03_configuring_a_theme", 
	 					type: "link" 
	 				}, { 
	 					name: "Multiple Themes", 
	 					url: "/Theming/04_multiple_themes", 
	 					type: "link" 
	 				}] 
	     		 }] })
*/
	]
/*
 ,
	         
	         s = [];
	angular.forEach(t, function(e) {
		s.push({
			name: e.label,
			url: e.url
		})
	})
	, l.push({
		name: "Bilboardy",
		pages: s.sort(r),
		type: "toggle"
	})
*/
	;
	var d = {},
	c = {};
	e.forEach(function(e) {
		e.docs.forEach(function(e) {angular.isDefined(e.private) || (c[e.type] = c[e.type] || [], c[e.type].push(e), d[e.module] = d[e.module] || [], d[e.module].push(e))})
	});  
	var m;
	return o.$on("$locationChangeSuccess", i), m = {
		sections: l,
		selectSection: function(e) {
			m.openedSection = e
		},
		toggleSelectSection: function(e) {
			m.openedSection = m.openedSection === e ? null : e
		},
		isSectionSelected: function(e) {
			return m.openedSection === e
		},
		selectPage: function(e, t) {
			t && t.url && a.path(t.url), m.currentSection = e, m.currentPage = t
		},
		isPageSelected: function(e) {
			return m.currentPage === e
		}
	}
}])
;



DocsApp.controller("CfgftpCtrl", ["$scope", "$mdDialog", "ConfigData", function($scope, $mdDialog, ConfigData) {
	ConfigData.Values({name: 'cfgftp',scope: $scope,me: ConfigData,message: 'Údaje pre Ftp prístup boli uložené na webserver.'});
}])
.controller("CfgevlpCtrl", ["$scope", "$mdDialog", "ConfigData", function($scope, $mdDialog, ConfigData) {
	ConfigData.Values({name: 'cfgevlp',scope: $scope,me: ConfigData,message: 'Údaje pre Ftp prístup boli uložené na webserver.'});
}])
.controller("CfgcoefCtrl", ["$scope", "$mdDialog", "ConfigData", function($scope, $mdDialog, ConfigData) {
	ConfigData.Values({name: 'cfgcoef',scope: $scope,me: ConfigData,message: 'Údaje pre koeficienty výpočtu boli uložené na webserver.'});
}])
.controller("CfgemailCtrl", ["$scope", "$mdDialog", "ConfigData", function($scope, $mdDialog, ConfigData) {
	ConfigData.Values({name: 'cfgemail',scope: $scope,me: ConfigData,message: 'Nastavenia emailov uložené na webserver.'});
}])
.controller("CfgusersCtrl", ["$scope", "$mdDialog", "ConfigData", function($scope, $mdDialog, ConfigData) {
	ConfigData.List({name: 'cfgusers',scope: $scope,me: ConfigData});
	ConfigData.Update({name: 'cfgusers',scope: $scope,me: ConfigData});
	
	$scope.toggleRight = function() {
		$mdSidenav('right').toggle()
		.then(function(){
			$log.debug("toggle RIGHT is done");
		});
	};
}])
.controller("AreaCtrl", ["$scope", "$mdDialog", "DbData","ApiURL", function($scope, $mdDialog, DbData,ApiURL) {
	DbData.List({name: 'areas',scope: $scope,me: DbData});
	DbData.Update({name: 'areas',scope: $scope,me: DbData});
	$scope.setFile = function(element){
		$scope.$apply(function($scope) {
			DbData.newItem('picture/'+element.files[0].name,element.files[0]).then(function(data) {
				$scope.rowdata.image=data;
			});
		});
	}	 
}])
.controller("ArecamCtrl", ["$scope", "$mdDialog", "DbData", function($scope, $mdDialog, DbData) {
	DbData.getItems('camdata').then(function (data) {
		$scope.cameras=data;
	});
	DbData.List({name: 'areas',scope: $scope,me: DbData});
	$scope.UpdCam=function(sp,cam){
		DbData.updItem('camdata/camera',{'spcode':sp,'camcode':cam}).then(function(data) {			
			for (var i = 0; i < $scope.items.length; i++) {
				if ( sp==$scope.items[i].spcode ){
					$scope.items[i].cameras=data.cameras;
					$scope.items[i].viewtypes=data.viewtypes;
					break;
				}
			}
		});
	};
	$scope.UpdCamview=function(sp,cam,type){
		DbData.updItem('camdata/viewtype',{'spcode':sp,'camcode':cam,'viewtype':type}).then(function(data) {			
			for (var i = 0; i < $scope.items.length; i++) {
				if ( sp==$scope.items[i].spcode ){
					$scope.items[i].viewtypes=data.viewtypes;
					break;
				}
			}
		});
	};
	$scope.GetCameraClass=function(cameras,cam){
		if( cameras && cam in cameras ) 
			return 'md-raised md-primary';
		else
			return 'md-raised';
	}
	$scope.GetViewClass=function(viewtypes,cam,type){
		if( viewtypes && viewtypes[cam] && viewtypes[cam]==type ) 
			return 'md-primary md-raised md-hue-3';
		else
			return '';
	}
	
	$scope.isCamDisabled=function(cameras,cam){
		if( cameras && cam in cameras ) 
			return false;
		else
			return true;
	}
}])
.controller("CustomersCtrl", ["$scope", "$mdDialog", "DbData", function($scope, $mdDialog, DbData) {
	DbData.List({name: 'customers',scope: $scope,me: DbData});
	DbData.Update({name: 'customers',scope: $scope,me: DbData});
}])
.factory("DlgEmail", ["$mdDialog" ,"DbData" , function($mdDialog,DbData) {
	return {
		ShowDlg: function($scope,ev,itm) {
			DbData.getItems('eml/texts').then(function (txts) {	
				$scope.SetEmailTexts(itm,txts);
			});	
			$mdDialog.show({
				controller: this.DlgEmailCtrl,
				templateUrl: 'partials/dlgemail.tpl.html',
				targetEvent: ev,
				locals: { item: itm }
			})
			.then(function(item) {
				$scope.processData=true;
				$scope.PostEmail(item).then(function(data) {
					$scope.processData=false;
					if (data.error){
						$mdDialog.show(
							$mdDialog.alert()
							.title("Odoslanie údajov")
							.content(data.error)
							.ariaLabel("Odoslanie údajov")
							.ok("Zatvoriť")
							.targetEvent(ev)
						);		
					} else {
						$mdDialog.show(
							$mdDialog.alert()
							.title("Odoslanie údajov")
							.content("Odoslanie údajov prebehlo úspešne")
							.ariaLabel("Odoslanie údajov")
							.ok("Zatvoriť")
							.targetEvent(ev)
						)
					}
				});
				
			}, function() {
			});

			this.DlgEmailCtrl.$inject = ['$scope', '$mdDialog', 'item'];
		},
		
		DlgEmailCtrl: function($scope, $mdDialog, item) {
			$scope.item = item;
			
			$scope.hide = function() {
				$mdDialog.hide();
			};
			$scope.cancel = function() {
				$mdDialog.cancel();
			};
			$scope.answer = function(item) {
				$mdDialog.hide(item);
			};

		}
	}
}])

.factory("DlgLog", ["$mdDialog" ,"DbData" , function($mdDialog,DbData) {
	return {
		ShowLog: function(ev,type) {
			DbData.getItems('applog/'+type).then(function (data) {	
				$mdDialog.show({
					controller: DlgLogCtrl,
					templateUrl: 'partials/dlglog.tpl.html',
					targetEvent: ev,
					locals: { items: data }
				})
				.then(function(items) {
//					$scope.processData=true;
//					$scope.PostEmail(item).then(function(data) {
//						$scope.processData=false;
//						if (data.error){
//							$mdDialog.show(
//								$mdDialog.alert()
//								.title("Odoslanie údajov")
//								.content(data.error)
//								.ariaLabel("Odoslanie údajov")
//								.ok("Zatvoriť")
//								.targetEvent(ev)
//							);		
//						} else {
//							$mdDialog.show(
//								$mdDialog.alert()
//								.title("Odoslanie údajov")
//								.content("Odoslanie údajov prebehlo úspešne")
//								.ariaLabel("Odoslanie údajov")
//								.ok("Zatvoriť")
//								.targetEvent(ev)
//							)
//						}
//					});
//					
//				}, function() {
				});
				DlgLogCtrl.$inject = ['$scope', '$mdDialog', 'items'];
			});				
			function DlgLogCtrl($scope, $mdDialog, items) {
				$scope.items = items;
				
				$scope.hide = function() {
					$mdDialog.hide();
				};
				$scope.cancel = function() {
					$mdDialog.cancel();
				};
			}
		}
	}
}])

.controller("CampaignsCtrl", ["$scope", "$mdDialog","DbData","$locale","$timeout", function($scope, $mdDialog, DbData,$locale,$timeout) {	
	$scope.loadCustomers = function(){
		$scope.customers = [];
		DbData.getItems('customers').then(function (data) {
			$scope.customers=data;
			$scope.$$loadingAsyncDone=true;
		});
	}
	
	DbData.List({name: 'campaigns',scope: $scope,me: DbData});
	DbData.Update({name: 'campaigns',scope: $scope,me: DbData});
	$scope.setFile = function(element){
		$scope.$apply(function($scope) {
			DbData.newItem('picture/'+element.files[0].name,element.files[0]).then(function(data) {
				$scope.rowdata.image=data;
			});
		});
	}	 
	$scope.setItemFile = function(element){
		$scope.$apply(function($scope) {
			DbData.newItem('picture/'+element.files[0].name,element.files[0]).then(function(data) {
				var sc=angular.element(element.parentElement).scope();
				sc.ardata.image=data;
				DbData.updItem('arearent/'+sc.ardata.idcc+'/pict',{'idcc':sc.ardata.idcc,'cid':sc.ardata.id,'image': data}).then(function(data) {
					var x=data;
//					sc.arearent=data;
//					$timeout(function() {
//						var element = document.getElementById('netprice'+ardata.id);
//						if(element)
//							element.focus();
//					});
				});
			});
		});
	}	 
	$scope.detailType='det';
		
	DbData.getItems('areas').then(function (data) {
		$scope.areas=data;
	});	
	$scope.UpdArea=function(c,s){
		DbData.updItem('campaigns/area',{'campcode':c,'spcode':s}).then(function(data) {			
			for (var i = 0; i < $scope.items.length; i++) {
				if (c==$scope.items[i].campcode ){
					$scope.items[i].areas=data;
					break;
				}
			}
		});
	};
	$scope.GetAreaClass=function(areas,sp){
		if( areas && sp in areas ) 
			return 'md-raised md-primary';
		else
			return '';
	};
	$scope.GetAreaIf=function(areas,sp){
		if( areas && sp in areas ) 
			return true;
		else
			return false;
	};
	$scope.exists = function (item, list) {
		return list.indexOf(item) > -1;
	};
	
	$scope.openDetailEx=function(type,item){
		DbData.PreList({name: 'campstat',scope: $scope,me: DbData});
		$scope.detailType=type;
		if (type=='datas'){
			$scope.expandedNew=false;
			item._expanded=true;
			$scope.getArearent(item);
//			$scope.getCampareas(item);
		} else{
			 if (type=='areas'){
				DbData.getItems('campaign/'+item.id+'/areas').then(function(data) {
					item.areasigns=data;
				}); 
			 }
			$scope.openDetail(item);
		}
	};

	$scope.getArearent=function(item){
		DbData.getItems('arearent/'+item.id).then(function(data) {
			item.arearent=data;
		});
	};
	$scope.newArearent=function(item){
		DbData.newItem('arearent/'+item.id,{campcode: item.campcode}).then(function(data) {
			item.arearent=data;
		});
	};
	$scope.delArearent=function(item,id){
		DbData.delItem('arearent/'+item.id+'/'+id).then(function(data) {
			item.arearent=data;
		});
	};
	$scope.saveArearent=function(item,aitem){
		DbData.updItem('arearent/'+item.id,aitem).then(function(data) {
			item.arearent=data;
		});
	};	
	$scope.saveArearentMon=function(item,ardata,fld,val){
		DbData.updItem('arearent/'+item.id,{'id': ardata.id,'fld':fld,'val': !val}).then(function(data) {
			item.arearent=data;
		});
	};
	$scope.saveArearentPrice=function(item,ardata,val,init){
		if (init){
			ardata.olenetprice=val;
		}
		if (ardata.olenetprice!=ardata.netprice){			
			DbData.updItem('arearent/'+ardata.idcc+'/area',{'idcc':ardata.idcc,'cid':item.id,'netprice': val}).then(function(data) {
				item.arearent=data;
				$timeout(function() {
					var element = document.getElementById('netprice'+ardata.id);
					if(element)
						element.focus();
				});
			});
		}
	};

	$scope.hidePopup=function(event){
		angular.element(event.path[1]).scope().isVisible=false;
	}

	$scope.saveArearentItems=function($event,cmd,item,ardata){
		DbData.updItem('arearentcmd',{'cid':item.id,'id':ardata.id,'idcc':ardata.idcc,'cmd': cmd,'campcode': ardata.campcode,'spcode': ardata.spcode,'year': ardata.year}).then(function(data) {
			if( data )
				item.arearent=data;
		});
		$scope.hidePopup($event);
	};

	$scope.closeDetailEx=function(item){
		$scope.detailType='det';
		$scope.closeDetail(item);
	};
	
	$scope.getCampareas=function(item){
		DbData.getItems('campareas/'+item.id).then(function(data) {
			item.areaprices=data;
		});
	};
	$scope.saveCampareas=function(ev,item,aitem){
		DbData.updItem('campareas/'+item.id,aitem).then(function(data) {
			item.arearent=data;
			$mdDialog.show(
					$mdDialog.alert()
					.title('Uloženie údajov')
					.content('Cena plochy bola zmenená')
					.ariaLabel('Uloženie údajov')
					.ok('Zatvoriť')
					.targetEvent(ev)
			);		
		});
	};

}])

.controller("CampstatCtrl", ["$scope", "$mdDialog", "DbData", "$locale", "DlgEmail", "DlgLog", function($scope, $mdDialog, DbData, $locale, DlgEmail, DlgLog) {
	$scope.detailType="";
	DbData.List({name: 'campstat',scope: $scope,me: DbData});
	
	$scope.openDetailEx=function(type,item){
		DbData.PreList({name: 'campstat',scope: $scope,me: DbData});
		$scope.detailType=type;
		$scope.processData=false;
		$scope.expandedNew=false;
		item._expanded=true;
		
		switch(type){
			case 'stastmon':
//				$scope.getStatmon(item);
				break;
			case 'stastall':
//				$scope.getStatall(item);
				break;
			default:
				break;
		}
	};
	$scope.closeDetailEx=function(item){
		$scope.detailType="";
		$scope.closeDetail(item);
	};
		
//	 function send() {
//		    var link = 'mailto:email@example.com?subject=Message from '
//		             +document.getElementById('email').value
//		             +'&body='+document.getElementById('email').value;
//		    window.location.href = link;
//	 }

	$scope.ShowLog = function($ev){
		DlgLog.ShowLog($ev,'bgb');
	}

	$scope.ShowEmailDlg=function($event,item){
		if (item.typestat=='all'){
			var files=[
			{'filename': 'stat_'+item.xname+'.pdf'},{'filename': 'stat_'+item.xname+'.xlsx'}
			];
			DlgEmail.ShowDlg($scope,$event,{'year': null,'id': item.id,'sendto': item.email,'disable':true,'attachments': files });
		} else {
			var files=[
			{'filename': 'stat_'+item.xname+'_'+ item.typestat.substring(5,7)+'_'+item.typestat.substring(0,4)+'.pdf'},
			{'filename': 'stat_'+item.xname+'_'+ item.typestat.substring(5,7)+'_'+item.typestat.substring(0,4)+'.xlsx'}
			];
			DlgEmail.ShowDlg($scope,$event,{'year': item.typestat.substring(0,4),'month': item.typestat.substring(5,7),'id': item.id,'sendto': item.email,'disable':true,'attachments': files });
		}
	}
	$scope.SetEmailTexts=function(itm,txts){
		itm.msg=txts.statMsg;
	}
	$scope.PostEmail=function(data){
		return DbData.newItem('eml/stat',{'year': data.year,'month': data.month,'id': data.id,'message':data.msg});
	}
	 
//	$scope.getStatmon=function(item){
//		DbData.getItems('statmon/'+item.id).then(function(data) {
//			item.arearent=data;
//		});
//	};
	
}])


.controller("CampareasCtrl", ["$scope", "$mdDialog", "DbData", function($scope, $mdDialog, DbData) {
	DbData.getItems('areas').then(function (data) {
		$scope.areas=data;
	});	
	DbData.List({name: 'campaigns',scope: $scope,me: DbData});
	$scope.UpdArea=function(c,s){
		DbData.updItem('campaigns/area',{'campcode':c,'spcode':s}).then(function(data) {			
			for (var i = 0; i < $scope.items.length; i++) {
				if (c==$scope.items[i].campcode ){
					$scope.items[i].areas=data;
					break;
				}
			}
		});
	};
	$scope.GetAreaClass=function(areas,sp){
		if( areas && sp in areas ) 
			return 'md-raised md-primary';
		else
			return '';
	}
}])

.controller("CamdataCtrl", ["$scope", "CurrentYM", "$mdDialog", "DbData", function($scope, CurrentYM, $mdDialog, DbData) {
	
	CurrentYM.initTabs($scope);
	
	$scope.LoadData=function(py,pm){
		DbData.List({name: 'camdata/'+py+'/'+(pm+1),scope: $scope,me: DbData});
	}
	
	$scope.DownloadData=function(){
		var inparams={name: 'camdata/'+$scope.selY+'/'+($scope.selM+1),scope: $scope,me: DbData};
		$scope.processData=true;
		DbData.updItem(inparams.name).then(function (data) {
			DbData.PosList(inparams,data);			
		});
	}
		
	$scope.$watch('selY', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,current,$scope.selM);
			$scope.LoadData(current,$scope.selM);
		}
	});
	
	$scope.$watch('selM', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,$scope.selY,current);
			$scope.LoadData($scope.selY,current);
		}
	});

	$scope.LoadData($scope.selY,$scope.selM);
}])
.controller("SpacedataCtrl", ["$scope", "CurrentYM", "$mdDialog", "DbData", "DlgLog",  function($scope, CurrentYM, $mdDialog, DbData, DlgLog) {
	
	CurrentYM.initTabs($scope);
	
	$scope.LoadData=function(py,pm){
		DbData.List({name: 'spacedata/'+py+'/'+(pm+1),scope: $scope,me: DbData});
	}
	
	$scope.Calculate=function(){
		var inparams={name: 'spacedata/'+$scope.selY+'/'+($scope.selM+1),scope: $scope,me: DbData};
		$scope.processData=true;
		DbData.updItem(inparams.name).then(function (data) {
			DbData.PosList(inparams,data);			
		});
	}
		
	$scope.$watch('selY', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,current,$scope.selM);
		}
		$scope.LoadData(current,$scope.selM);
	});
	
	$scope.$watch('selM', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,$scope.selY,current);
		}
		$scope.LoadData($scope.selY,current);
	});

	$scope.ShowLog = function($ev){
		DlgLog.ShowLog($ev,'rat');
	}
	
	$scope.LoadData($scope.selY,$scope.selM);
}])

.controller("ArealetterCtrl", ["$scope", "CurrentYM", "$mdDialog", "DbData", "DlgEmail", "DlgLog", function($scope, CurrentYM, $mdDialog, DbData, DlgEmail, DlgLog) {
	DbData.getItems('areas').then(function (data) {
		$scope.areas=data;
	});	

	CurrentYM.initTabs($scope);
	
	$scope.LoadData=function(py,pm){
		DbData.List({name: 'areafiles/'+py+'/'+pm,scope: $scope,me: DbData});
	}
	DbData.Update({name: 'areafiles/'+$scope.selY,scope: $scope,me: DbData});

	$scope.$watch('selY', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,current,$scope.selM);
		}
		$scope.LoadData(current,$scope.selM);
	});
	$scope.$watch('selM', function(current, old){
		if ( old && (old != current)) {
			CurrentYM.saveYM($scope,$scope.selY,current);
		}
		$scope.LoadData($scope.selY,current);
	});
	$scope.DownloadFile=function(type,spcode){
		DbData.getItems('areafiles/'+spcode+'/'+type+'/'+$scope.selY+'/'+$scope.selM).then(function(data) {
			var x=data;
		});
	};
	
	$scope.ShowEmailDlg=function($event,item){
		var files=[
		{'filename': item.spcode.replace('/','-')+zeroPad($scope.selM,10)+'_'+zeroPad($scope.selY,1000)+'.pdf'}
//		{'filename': item.spcode.replace('/','-')+'P'+zeroPad($scope.selM,10)+'_'+zeroPad($scope.selY,1000)+'.xls'},
//		{'filename': item.spcode.replace('/','-')+'V'+zeroPad($scope.selM,10)+'_'+zeroPad($scope.selY,1000)+'.xls'},
//		{'filename': item.spcode.replace('/','-')+'P'+zeroPad($scope.selM,10)+'_'+zeroPad($scope.selY,1000)+'.svg'},
		];
		DlgEmail.ShowDlg($scope,$event,{'year': $scope.selY,'month': $scope.selM,'id': item.id,'sendto': ' ','disable':false,'attachments': files});
	}
	$scope.SetEmailTexts=function(itm,txts){
		itm.sendto=txts.reflSender;
		itm.msg=txts.reflMsg;
	}
	
	$scope.ShowLog = function($ev){
		DlgLog.ShowLog($ev,'refl');
	}
	
	$scope.PostEmail=function(data){
		return DbData.newItem('eml/refl',{'year': data.year,'month': data.month,'id': data.id,'sendto':data.sendto,'message':data.msg});
	}

}])
.directive('stringToNumber', function() {
	return {
		require: 'ngModel',
		link: function(scope, element, attrs, ngModel) {
			ngModel.$parsers.push(function(value) {
				return '' + value;
			});
			ngModel.$formatters.push(function(value) {
				return parseFloat(value, 10);
			});
		}
	};
})

.directive('mdPopupmenu',['$timeout','$log', function($timeout,$log){
	return {
		restrict: 'E',
		transclude :true,
		scope: {value: '=',icon: '=', direction: '=', name: '=', cascade: '=', scrollCount: '=scrollCount'},
		link: ['$scope',function ($scope, element) {
			$scope.menu = 	element.children()[3];
			$scope.itemNumber = ($scope.scrollCount && $scope.scrollCount > 0) ? $scope.scrollCount : $scope.menu.children.length; 
			$scope.itemHeight = ($scope.cascade) ? 32 : 45;
			$scope.menuHeight = $scope.itemNumber*$scope.itemHeight;
			$timeout(function () {
				angular.element($scope.menu).css('margin-left', ((element.children()[2].offsetWidth+15)*-1)+'px');
			},0);
		}],
		controller: ['$scope', function ($scope) {
			$scope.isVisible=false;
		}],
//		template: '<style>#{{name}}.md-menu {position: absolute;z-index: 25;box-shadow: 0px 6px 12px rgba(0,0,0,0.25);-webkit-box-shadow: 0px 6px 12px rgba(0,0,0,0.25);background-color: rgba(255,255,255,1);display:static;height:{{menuHeight}}px;overflow-y:auto;overflow-x:hidden;margin-top:-{{(direction == \'up\') ? menuHeight-(itemHeight-8) : 8;}}px;}#{{name}}.md-menu.ng-hide-add, #{{name}}.md-menu.ng-hide-remove {transition: all .2s linear;-webkit-transition: all .2s linear;overflow: hidden;height: {{menuHeight}}px;margin-top:-{{(direction == \'up\') ? menuHeight-(itemHeight-8) : 8;}}px;}#{{name}}.md-menu.ng-hide {height: 0%;margin-top:{{(direction == \'up\') ? 0 : -8;}}px;}</style><span ng-show="isVisible" ng-click="isVisible=false" class="md-menu-bg"></span><a href ng-click="isVisible=!isVisible">{{value}}</a><span ng-show="isVisible" id="{{name}}" class="md-menu" ng-transclude></span>'
		template: '<style>#{{name}}.md-menu {position: absolute;z-index: 25;box-shadow: 0px 6px 12px rgba(0,0,0,0.25);-webkit-box-shadow: 0px 6px 12px rgba(0,0,0,0.25);background-color: rgba(255,255,255,1);display:static;height:{{menuHeight}}px;overflow-y:auto;overflow-x:hidden;margin-top:-{{(direction == \'up\') ? menuHeight-(itemHeight-8) : 8;}}px;}#{{name}}.md-menu.ng-hide-add, #{{name}}.md-menu.ng-hide-remove {transition: all .2s linear;-webkit-transition: all .2s linear;overflow: hidden;height: {{menuHeight}}px;margin-top:-{{(direction == \'up\') ? menuHeight-(itemHeight-8) : 8;}}px;}#{{name}}.md-menu.ng-hide {height: 0%;margin-top:{{(direction == \'up\') ? 0 : -8;}}px;}</style><span ng-show="isVisible" ng-click="isVisible=false" class="md-menu-bg"></span><md-button class="md-fab md-hue-1 aplbtnsize" aria-label="{{value}}" ng-click="isVisible=!isVisible"><ng-md-icon icon="{{icon}}"></ng-md-icon></md-button><span ng-show="isVisible" id="{{name}}" class="md-menu" ng-transclude></span>'
	}
}])








.controller('mdSelect2Controller', ['$scope', function($scope){
	$scope.selectActive = false;
	$scope.selectedItemIndex = -1;

	$scope.toggleActive = function(){
		$scope.selectActive = !$scope.selectActive;
	}

	$scope.toggleSelectedItem = function($event){
		$scope.updateActiveItem(angular.element($event.target));
	}
}])
.directive('mdSelect2', ['$log', function($log){
	return {
		restrict: 'E',
		controller: 'mdSelect2Controller',
		scope: true,
		link: function($scope, $el, $attrs){
			var selectButton = $el.find('button'),
			selectList = $el.find('ul'),
			selectListItems = $el.find('li');
			
			// make child items scriptable for focus, add role
			selectListItems.attr({'tabIndex':'-1', 'role': 'menuitem'});
			$scope.numChildItems = selectListItems.length;

			selectButton.on('focus', function($event){
				$log.debug($event.target.getAttribute('id'));
			});
			selectListItems.on('focus', function($event){
				$log.debug($event.target.getAttribute('id'));
			});

			$scope.updateActiveItem = function(target) {
				// reset all child items
				selectListItems.removeClass('active');
	
				var selectedChildEl = target;
				// add visible style to child item and send focus there for scrolling
				selectedChildEl.addClass('active').focus();
	
				// tell screen readers which item is selected in the list
				// needs more research, may not be necessary because of text copy
				//selectList.attr('aria-activedescendant', selectedChildEl.attr('id'));
	
				// copy text from selected list item to button & send focus back
				selectButton.text(selectedChildEl.text()).focus();
			}
	
			$el.on('click', function($event) {
			});
			$scope.click = function($event){
				$scope.toggleSelectedItem($event);
				// store index of item we clicked on so keyboard stays in sync
				for (var i = 0; i < $scope.numChildItems; i++) {
					if(selectListItems[i] === $event.target){
						$scope.selectedItemIndex = i;
					}
				}
				$scope.toggleActive();
			}
			$scope.keydown = function($event){
			// Close popup on escape key
			if($event.keyCode === 27) {
				$scope.toggleActive();
			}
			// Up or down arrow keys
			if($event.keyCode === 38 || $event.keyCode === 40){
				$event.preventDefault();
	
				if($event.keyCode === 38 && $scope.selectedItemIndex > 0){
					$scope.selectedItemIndex--;
				}
				if($event.keyCode === 40 && $scope.selectedItemIndex < $scope.numChildItems-1){
					$scope.selectedItemIndex++;
					$log.debug($scope.selectedItemIndex);
				}
				// highlight active child item based on arrow key index
				$scope.updateActiveItem($el.find('li').eq($scope.selectedItemIndex));
	
				if($event.keyCode === 13) {
					selectButton.focus();
				}
			}
		};
	}
}
}])


;
