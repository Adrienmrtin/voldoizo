
    
;(function($) {
    "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                name2: {
                    required: true,
                    minlength: 2
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true,
                    minlength: 6
                },
                message: {
                    required: true,
                    minlength: 20
                }
            },
            messages: {
                name: {
                    required: "Veuillez entrer votre nom.",
                    minlength: "Votre nom doit contenir au minimum 2 caractères."
                },
                name2: {
                    required: "Veuillez entrer votre prénom.",
                    minlength: "Votre prénom doit contenir au minimum 2 caractères."
                },
                email: {
                    required: "Veuillez entrer votre e-mail."
                },
                subject: {
                    required: "Veuillez entrer un objet.",
                    minlength: "Votre objet doit contenir au minimum 6 caractères."
                },
                message: {
                    required: "Veuillez entrer un message.",
                    minlength: "Votre message doit contenir au minimum 20 caractères."
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:("php/contact_process.php"),
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                        })
                    }
                })
            }
        })
    })
        
})(jQuery)
