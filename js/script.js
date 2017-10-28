// to do list
$(function () {
    // user clicks on checkbox and the text is struck
    $("body").on("click", ".toDoCheck",  function () {
        $(this).parents(".new-item").toggleClass("border-checked").find(".itemDone").toggleClass("strike").prop( "disabled", true );
    });
    // user clicks on plus button and it generates completely new list-item
    $(".add").on("click", function (){
        var listItemDataItem = $(".new-item").length+1;
        console.log(listItemDataItem);


        var newListItem = $("<div class='new-item'></div>").attr("data-item", listItemDataItem);

        // $(".new-item").draggable();
        var newCheckboxWrapper = $("<div class='checkbox-wrapper'></div>");
        var newToDoCheck = $("<input type=\"checkbox\" class=\"toDoCheck\">");
        var checkboxFake= $("<div class=\"checkbox-fake\"></div>");
        var itemDone = $("<input type=\"text\" name=\"itemDone\" class=\"itemDone\">");
        var middleBtn = $("<div class=\"middle-btn\"></div>");
        var buttonEdit = $("<div class=\"button edit\"><i class=\"fa fa-pencil\" aria-hidden=\"true\"></i></div>");
        var buttonDelete = $("<div class=\"button delete\"><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></div>");
        middleBtn.append(buttonEdit, buttonDelete);
        newCheckboxWrapper.append(newToDoCheck, checkboxFake);
        newListItem.append(newCheckboxWrapper, itemDone, middleBtn);
        $(".toDoList").prepend(newListItem);
    });

    // user clicks on delete btn
    $("body").on("click", ".delete",  function(){
        $(this).parents(".new-item").remove();
    });
    // user clicks on edit btn
    $("body").on("click", ".edit",  function(){
        $(this).parents(".new-item").removeClass("border-checked").find(".itemDone").removeClass("strike").prop( "disabled", false ).focus();
        $(this).parents(".new-item").find(".toDoCheck").prop("checked", false);
    });
    var x='';
    $("body").on("blur", ".itemDone",  function () {
        var atr = $(this).parent().attr('data-id');
        itemValue = JSON.parse(localStorage.getItem('toDoItem'));
        x = $(this).val();

        itemValue[atr].text = x;

        console.log(atr);

        // itemValue.push({
        //     "checked": 0,
        //     "text": x
        // })
        localStorage.setItem("toDoItem", JSON.stringify(itemValue));
        // alert()
    });

    // working with local storage
    var itemValue = [
        {
            "checked": 0,
            "text": x
        }
    ]



});



