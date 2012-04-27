/* Author:
  @Crisgarner
*/


$(document).ready(function(){

 /* $(".drag-item").draggable({
        drag:function(){
          $(this).css("opacity","0.4");
        },
        stop:function(){
          $(this).css("opacity","1");
        },
        connectToSortable: '.column',
        cursor: 'move',
        helper: 'clone',
        revert: 'invalid'
    });
*/

counter = 0;
    //Make element draggable
    $(".drag-item").draggable({
        helper: 'clone',
        containment: 'dragzone',
        //When first dragged
        stop: function (ev, ui) {
            var pos = $(ui.helper).offset();
            objName = "#clonediv" + counter;
            console.log(objName);
            $(objName).css({
                "left": pos.left,
                "top": pos.top
            });
            $(objName).removeClass("drag-item");
            //When an existiung object is dragged
            $(objName).draggable({
                containment: 'parent',
                stop: function (ev, ui) {
                    var pos = $(ui.helper).offset();
                    console.log($(this).attr("id"));
                    console.log(pos.left)
                    console.log(pos.top)
                }
            });
        }
    });
    //Make element droppable
    $("#dragzone").droppable({
        drop: function (ev, ui) {
            if (ui.helper.attr('id').search(/drag[0-9]/) != -1) {
                counter++;
                var element = $(ui.draggable).clone();
                element.addClass("tempclass");
                $(this).append(element);
                $(".tempclass").attr("id", "clonediv" + counter);
                $("#clonediv" + counter).removeClass("tempclass");
                //Get the dynamically item id
                draggedNumber = ui.helper.attr('id').search(/drag([0-9])/)
                itemDragged = "drag-item" + RegExp.$1
                console.log(itemDragged)
                $("#clonediv" + counter).addClass(itemDragged);
            }
        }
    });
});