Events.on(ClientLoadEvent, () => {
    Packages.arc.util.Timer.schedule(() => {
        Vars.ui.loadfrag.show();
        var loadTime = Mathf.random(15);
        Packages.arc.util.Timer.schedule(() => {
            Vars.ui.loadfrag.hide();
        }, loadTime);
    }, 15, 30)
});
