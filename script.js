// TODO: idea - books ? VT/NT
$("document").ready(function () {
    $('[data-toggle="tooltip"]').tooltip();

    // Init game
    window.number_of_levels = 10;
    window.points_per_level = 3;
    window.current_exercise_type = 'ID001';
    window.is_logged_in = false;
    window.consecutive_successes = 0;
    window.consecutive_fails = 0;
    window.bonus_points = 0;
    window.hint_used = false;
    window.all_books = [
      'Geneza', 'Exodul', 'Levitic',
      'Numeri', 'Deuteronom', 'Iosua', 'Judecători',
      'Rut', '1 Samuel', '2 Samuel', '1 Împărați', '2 Împărați',
      '1 Cronici', '2 Cronici', 'Ezra', 'Neemia', 'Estera',
      'Iov', 'Psalmii', 'Proverbe', 'Eclesiastul', 'Cântarea cântărilor',
      'Isaia', 'Ieremia', 'Plângerile lui Ieremia', 'Ezechiel', 'Daniel',
      'Osea', 'Ioel', 'Amos', 'Obadia', 'Iona', 'Mica', 'Naum', 'Habacuc',
      'Țefania', 'Hagai', 'Zaharia', 'Maleahi', 'Matei', 'Marcu', 'Luca',
      'Ioan', 'Faptele Apostolilor', 'Romani', '1 Corinteni', '2 Corinteni',
      'Galateni', 'Efeseni', 'Filipeni', 'Coloseni', '1 Tesaloniceni',
      '2 Tesaloniceni', '1 Timotei', '2 Timotei', 'Tit', 'Filimon', 'Evrei',
      'Iacov', '1 Petru', '2 Petru', '1 Ioan', '2 Ioan', '3 Ioan',
      'Iuda', 'Apocalipsa'];
    window.current_text = "aaa";
    window.old_text = "aaa";

    // Definition of exercises types
    window.exercises_types = {
        'ID001': {
            'plugin_name': 'order_1',
            'title': 'Cărți consecutive',
            'description': 'Selectează-le în ordinea corectă.',
            'points': 1
        },
        'ID002': {
            'plugin_name': 'order_2',
            'title': 'Cărți neconsecutive',
            'description': 'Care apare prima în Biblie?',
            'points': 2
        },
    }

    // Simulate a user profile
    window.user_profile = {
        'nickname': 'Albert E.',
        'photo': './images/albert_e.png',
        'preferences': {
            'exercises_types': ['ID001', 'ID002']
        },
        'level': 1,
        'experience_points': 0
    }

    // Definition of nice messages listed on success
    window.success_messages = {
        'M001': 'Corect!',
        'M002': 'Bravo! Continuă!',
        'M003': 'Felicitări! Mergi mai departe!',
        'M004': 'Fantastic!',
        'M005': 'Super!',
        'M006': 'Perfect!',
        'M007': 'Foarte bine!',
        'M008': 'Minunat! Muncești din greu și înveți versete noi.',
        'M009': 'Se vede mult progres.',
        'M010': 'Devii din ce în ce mai bun.',
    }

    // Definition of messages to be listed on fail
    window.fail_messages = {
        'F001': 'Ops!',
        'F002': 'Of... Nu.',
        'F003': 'Mai încearcă.',
        'F004': 'Ai greșit...',
        'F005': 'Hmm. Nu chiar.',
        'F006': 'Of of of',
        'F007': 'Poți face întotdeauna mai mult decât ai crezut.',
        'F008': 'Mergi cu încredere mai departe.',
        'F009': 'Nimic nu este imposibil pentru cel care încearcă.',
        'F010': 'Nu-ți pierde entuziasmul.'
    }

    // Definition of levels
    window.levels = {
        1: {
            'exercises_types': ['ID001'],
            'success_messages': ['M001', 'M002', 'M006', 'M007'],
            'fail_messages': ['F001', 'F007', 'F008', 'F009', 'F010']
        },
        2: {
            'exercises_types': ['ID001'],
            'success_messages': ['M002', 'M003', 'M006', 'M007', 'M008'],
            'fail_messages': ['F002', 'F003', 'F007', 'F008', 'F009', 'F010']
        },
        3: {
            'exercises_types': ['ID001'],
            'success_messages': ['M003', 'M004', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F003', 'F007', 'F008', 'F009', 'F010'],
        },
        4: {
            'exercises_types': ['ID001'],
            'success_messages': ['M004', 'M005', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F003', 'F004', 'F005', 'F007', 'F008', 'F009', 'F010'],
        },
        5: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        },
        6: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        },
        7: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        },
        8: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M006', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        },
        9: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        },
        10: {
            'exercises_types': ['ID001'],
            'success_messages': ['M005', 'M007', 'M008', 'M009', 'M010'],
            'fail_messages': ['F006', 'F007', 'F008', 'F009', 'F010'],
        }
    }

    function clear_board() {
        // Clear the board. Usually when an exercise is done.
        $("div#exercise-board").html("");
    }

    function random_between(min, max) {
        // return a random number between min and max
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function more_and_more_probable_by_level_up(level) {
        // a way to generate difficulty for each level
        var min = 1;
        var number = 1;
        var max = level + 1;
        var res = random_between(min, max) === number;
        return !res;
    }

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    function random_from_list(list) {
        // Return a random item from a list (array) of elements
        return list[Math.floor(Math.random() * list.length)];
    }

    function refresh_texts() {
        // Update experience points and current level
        $("li#info-points span").text(window.user_profile.experience_points);
        $("li#info-level span").text(window.user_profile.level);
        $("li#info-consecutive-successes span").text(window.consecutive_successes);
        $("li#info-current-text span").text(window.current_text);
    }

    function game_over() {
        // You won!
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yy = today.getFullYear().toString().substr(-2);

        finish_code = "VA" + yy + mm + dd;

        alertify.message("Ai terminat toate nivelurile. Felicitări!");
        $("button#some-experience").hide();
        $("button#fail").hide();
        $("div.row.row-footer").hide();
        $("div.row.row-board").html("<h2>Bravooooo!</h2>");
    }

    function new_level() {
        // New level
        alertify.message("Nivel nou. Felicitări!");
    }

    $.fn.order_1 = function () {
      // Select x consecutive books. The user will press one by one in
      // correct order.
      var x = window.user_profile.level + 1;
      var random_start = random_between(1, 66-x);
      var selected_books = [];
      var correct_books = [];
      for (var i = random_start; i < random_start + x; i++) {
        selected_books.push(window.all_books[i]);
        correct_books.push(window.all_books[i]);
      }

      var random_books = shuffle(selected_books);

      for (var j = 0; j < random_books.length; j++) {
        $("div#exercise-board").append("<button class='btn btn-success a-book'>" + random_books[j] + "</button>");
      }

      $("button.a-book").on("click", function() {
        var this_book = $(this).text();
        if (this_book == correct_books[0]) {
          $(this).remove();
          var removed_book = correct_books.shift();
          if (correct_books.length == 0) {
            $(document).trigger("exercise_success_event", ["SUCCESS"]);
          }
        } else {
          $(document).trigger("exercise_fail_event", ["FAIL"]);
        }
      });

      // $(document).trigger("exercise_success_event", ["SUCCESS"]);
    };

    $.fn.order_2 = function () {
      // Select x non-consecutive random books. The user will select the
      // first one.
      debugger;
      $(document).trigger("exercise_success_event", ["SUCCESS"]);
      $(document).trigger("exercise_fail_event", ["FAIL"]);
    };

    function new_exercise() {
        // Start a new exercise
        $("div.hint p").hide();
        $("div.hint button").show();
        window.hint_used = false;
        $("button.dp4-done").remove();

        if (window.user_profile.level === 0) {
            return;  // TODO fix me
        }

        window.consecutive_fails = 0;

        var possible_exercises = levels[window.user_profile.level].exercises_types;
        var choosen_exercise_id = random_from_list(possible_exercises);

        var exercise = exercises_types[choosen_exercise_id];

        window.current_exercise_type = choosen_exercise_id;

        $("div#debug-info li.exercise-id span").text(choosen_exercise_id);
        $("div#debug-info li.exercise-points span").text(exercise.points);
        $("div#exercise-info h3.exercise-title").text(exercise.title);
        $("div#exercise-info p.exercise-description").text(exercise.description);

        var plugin_name = exercise.plugin_name;

        $("div#exercise-board")[plugin_name]();

    }

    function update_progress() {
        // Update the experience points, check levels
        var old_points = window.user_profile.experience_points;

        var points_for_this = exercises_types[window.current_exercise_type].points;
        if (window.hint_used) {
            points_for_this = 0;
        }

        window.user_profile.experience_points += points_for_this;
        window.user_profile.experience_points += window.bonus_points;
        window.bonus_points = 0;

        window.consecutive_successes += 1;

        if (window.hint_used) {
            window.consecutive_successes = 0;
        }

        if (window.consecutive_successes % 5 == 0 && window.consecutive_successes > 0) {
            alertify.message("Superb! " + window.consecutive_successes + " exerciții consecutive rezolvate corect din prima.");
            window.user_profile.experience_points += window.consecutive_successes;
        }

        new_exercise();

        if (window.user_profile.experience_points >= window.number_of_levels * window.points_per_level) {
            game_over();
        } else {
            var level_start_at = window.user_profile.level * window.points_per_level;
            if (old_points < level_start_at && window.user_profile.experience_points >= level_start_at) {
                window.user_profile.level += 1;
                new_level();
            }
        }
        save_to_cookies();
        refresh_texts();
    }

    function fail() {
        // When there is no progress
        window.consecutive_fails += 1;
        var possible_messages = levels[window.user_profile.level].fail_messages;
        var choosen_msg_id = random_from_list(possible_messages);
        var message = fail_messages[choosen_msg_id];
        window.consecutive_successes = 0;
        refresh_texts();
        alertify.error(message);

        // if (window.consecutive_fails >= 3) {
        //     $("div.hint p.text-hint").show();
        //     $("div.hint button").hide();
        //     window.hint_used = true;
        //     $("div.next-exercise button").show();
        // }
    }

    function start_game() {
        // Init game starting with user's current experience points
        // update_progress(); only for logged in case

        new_exercise();
        refresh_texts();
    }

    function load_profile() {
        // Load logged in profile
        window.experience_points = user_profile.experience_points;
        window.current_level = user_profile.level;

        var nickname = user_profile.nickname;
        var photo = user_profile.photo;

        $("#info-nickname span").text(nickname);
    }
    function get_expire_date() {
        var cookie_expire = new Date();
        cookie_expire.setTime(cookie_expire.getTime() + 180 * 24 * 60 * 60 * 1000);
        return ";expires=" + cookie_expire.toUTCString();
    }
    function get_or_set_cookie(key, currentValue) {
        var result = currentValue;
        var cookieVal = document.cookie.split('; ').find(row => row.startsWith(key));
        if (!cookieVal) {
            document.cookie = key + "=" + currentValue + get_expire_date();
        } else {
            result = cookieVal.replace(key + "=", "");
        }
        return result;
    }

    function save_to_cookies() {
        document.cookie = "user_profile_level=" + window.user_profile.level + get_expire_date();
        document.cookie = "user_profile_experience_points=" + window.user_profile.experience_points +  get_expire_date();
    }

    function show_user_profile_popup() {
        if($(".dp4-nickname").val().length > 0) {
            $(".dp4-profile-dialog-header span").text("");
            $(".dp4-confirm-profile-dialog span").text("Salvează");
        }else{
            $(".dp4-profile-dialog-header span").text("Bun venit! Pentru a începe, completează-ți numele.");
            $(".dp4-confirm-profile-dialog span").text("Start");
        }
        $(".user-profile-dialog").removeClass("app-hidden");
    }

    if (!document.cookie.split('; ').find(row => row.startsWith('user_profile_nickname'))) {
        show_user_profile_popup();
    } else {
        window.is_logged_in = true;
        window.user_profile.nickname = document.cookie.split('; ').find(row => row.startsWith('user_profile_nickname')).replace("user_profile_nickname=", "");
        window.user_profile.level = parseInt(get_or_set_cookie("user_profile_level", window.user_profile.level));
        window.user_profile.experience_points = parseInt(get_or_set_cookie("user_profile_experience_points", window.user_profile.experience_points));
    }

    // OK, let's start.
    if (window.is_logged_in) {
        load_profile();
    }

    $("#info-nickname span").on("click", function () {
        $(".dp4-nickname").val(window.user_profile.nickname);
        show_user_profile_popup();
    });

    $('input.dp4-nickname').keyup(function(){
      $('button.dp4-confirm-profile-dialog').prop('disabled', this.value == "" ? true : false);
    });

    $(".user-profile-dialog").click(function(event) {
        if ( event.target !== event.currentTarget ){
            return;
        }
        $(".user-profile-dialog").addClass("app-hidden");
    });
    $(".dp4-confirm-profile-dialog").on("click", function () {
        $(".user-profile-dialog").addClass("app-hidden");
        window.user_profile.nickname = $(".dp4-nickname").val();
        window.is_logged_in = true;
        load_profile();
        document.cookie = "user_profile_nickname=" + window.user_profile.nickname +  get_expire_date();
    });

    $(document).on("exercise_success_event", {
        foo: "bar"
    }, function (event, arg1, arg2) {
        window.old_text = window.current_text;

        var possible_messages = levels[window.user_profile.level].success_messages;
        var choosen_msg_id = random_from_list(possible_messages);
        var message = success_messages[choosen_msg_id];
        alertify.success(message);

        $("div.next-exercise button").show();
        $("div.hint button").hide();
    });

    $("div.next-exercise button").on("click", function () {
        update_progress();
        $("div.next-exercise button").hide();
    });

    $("div.hint button").on("click", function () {
        $("div.hint button").hide();
        $("div.hint p.text-hint").show();
        window.hint_used = true;
    });

    $(document).on("exercise_fail_event", {
        foo: "bar"
    }, function (event, arg1, arg2) {
        fail();
    });

    alertify.set('notifier', 'position', 'top-right');

    $("li#info-reset span").on("click", function() {
        if (confirm('Tu chiar vrei să începi de la nivelul 1 din nou? Pierzi tot progresul.')) {
            window.user_profile.level = 1;
            window.current_level = 1;
            window.user_profile.experience_points = 0;
            save_to_cookies();
            refresh_texts();
        } else {
            alert('Te-ai răzgândit. Poți continua de unde ai rămas.');
        }
    });

    start_game();

    // These are for testing:

    // In case of success:
    $("button#some-experience").on("click", update_progress);

    $("button#some-experience-bonus").on("click", function () {
        window.bonus_points = 20;
        update_progress();
    });

    // In case of fail:
    $("button#fail").on("click", fail);
});
