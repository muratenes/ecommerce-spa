<?php

namespace Tests;

use App\Models\User;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;
use Illuminate\Foundation\Testing\WithFaker;

abstract class TestCase extends BaseTestCase
{
    use CreatesApplication;
    use WithFaker;

    protected $user;
    protected array $schemas;

    public function setUp(): void
    {
        parent::setUp();
        $this->user = User::first();
        $this->setUpFaker();
        $this->schemas['success'] = [
            'status',
            'message',
            'data',
        ];
    }
}
