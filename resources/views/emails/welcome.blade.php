@component('mail::message')
# Подтвердите Ваш email

<a href="{{ route('verifyUser',[
        'code'  =>  $code,
        'email' =>  $email
    ]) }}">
    <button class="btn btn-primary">
        Подтвердить
</a>
</button>

@endcomponent
