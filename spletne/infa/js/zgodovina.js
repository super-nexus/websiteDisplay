/**
 * Created by Andrija on 2/27/16.
 */

$(function(){
    $("#10stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#10st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });

    $("#17stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#17st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });
    $("#18stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#18st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });
    $("#19stD").dialog({
        draggable: false,
        resizable: true,
        width: '80%',
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#19st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });
    $("#20stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#20st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });
    $("#21stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#21st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });

    $("#1700stD").dialog({
        draggable: false,
        resizable: true,
        width: "auto",
        modal: true,
        position: {
            my: 'center top',
            at: 'center bottom',
            of: '#1700st'
        },
        show: 100,
        hide: '100',
        autoOpen: false,
        buttons: {
            "Close": function(){
                $(this).dialog("close");
            }
        }
    });

    $(".dialogable").click(function(){
        dialogId = $(this).attr("data-pannel");
        $(dialogId).dialog("open");
    });

});
