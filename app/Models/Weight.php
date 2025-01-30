<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Weight extends Model
{
    protected $fillable = ['weight', 'measured_at'];

    protected $casts = [
        'weight' => 'integer',
    ];

    public function getWeightAttribute($value)
    {
        return $value / 1000;
    }

    public function setWeightAttribute($value)
    {
        $this->attributes['weight'] = $value * 1000;
    }

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
