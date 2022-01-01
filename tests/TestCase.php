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
        $this->schemas();
    }


    private function schemas()
    {
        // Success Response
        $this->schemas['success'] = [
            'status',
            'message',
            'data',
        ];
        // Pagination Response
        $this->schemas['pagination'] = [
            'current_page',
            'data',
            'first_page_url',
            'from',
            'last_page',
            'last_page_url',
            'links',
            'next_page_url',
            'path',
            'per_page',
            'prev_page_url',
            'to',
            'total',
        ];
    }
}
